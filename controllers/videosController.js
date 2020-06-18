const Video = require("../models/videos");
const { sendEmail } = require("../helpers/email");
const videoService = require("../services/videoService");

module.exports.emailVideo = async (req, res) => {
  const { id, recieverEmail } = req.body;
  const video = await videoService.findVideoById(id);
  const { thumbnail } = video;
  try {
    if (req.body.recieverEmail === "") {
      return res.status(400).json({ message: "no email provided" });
    }
    const result = await sendEmail(id, recieverEmail, thumbnail);
    if (result.error || result === false) {
      return res.status(400).json({ message: "fail to send email" });
    } else {
      return res.status(200).json({ message: "email sent sucessfully" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.sendMultipleEmail = async (req, res) => {
  const { emails, id } = req.body;
  const video = await videoService.findVideoById(id);
  const { thumbnail } = video;
  try {
    if (emails.lenght === 0) {
      res.status(400).json({
        message: "no email provided"
      });
      return;
    }
    const result = await sendEmail(id, emails, thumbnail);
    if (result.error || result === false) {
      return res.status(400).json({ message: "fail to send email" });
    } else {
      return res.status(200).json({ message: "email sent sucessfully" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.postVideo = async (req, res) => {
  try {
    const video = new Video({
      ...req.body
    });
    video.save();
    return res
      .status(201)
      .json({ video: video, message: "video sucessfully saved" });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.getAllVideos = async (req, res) => {
  try {
    const videos = await videoService.getAllVideos();
    if (!videos) res.status(400).json({ message: "No Video Available" });
    res.status(200).json({ message: videos });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.getUserVideos = async (req, res) => {
  let id = req.query.id;
  let page = req.query.page ? req.query.page : 1;
  let search = req.query.title;

  try {
    let videos = [];
    if (req.query.title !== "" && req.query.title !== undefined) {
      console.log("2 called");
      videos = await videoService.findUserVideoByTitle(id, page, search);
      if (!videos) res.status(400).json({ message: "No video available" });
      return res.status(200).json({ message: videos });
    } else {
      console.log("1 called");
      videos = await videoService.findUserVideo(id, page);
      if (!videos) res.status(400).json({ message: "No video available" });
      return res.status(200).json({ message: videos });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.updateVideo = async (req, res) => {
  let videoId = req.body.id;
  delete req.body.id;
  try {
    if (!videoId) {
      return res.status(400).json({
        message: "video id not provided"
      });
    }
    const video = await videoService.updateVideo(videoId, req.body);
    if (video) {
      return res.status(200).json({
        message: "video updated",
        video: video
      });
    }
    res.status(400).json({ message: "video update failed" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports.deleteVideo = async (req, res) => {
  let { id, pageNo } = req.query;
  console.log("page no", pageNo);
  try {
    const video = await videoService.findVideoById(id);
    if (video) {
      let userId = video.userId;
      await videoService.deleteVideo(id);
      const videos = await videoService.findUserVideo(userId, pageNo);
      return res.status(200).json({
        message: "video deleted",
        nextVideo: videos[videos.length - 1]
      });
    } else {
      return res.status(400).json({
        message: "No record found"
      });
    }
  } catch (error) {
    console.log("error", error.message);
    res.status(400).json({ message: error.message });
  }
};

module.exports.getSingleVideo = async (req, res) => {
  let id = req.query.id;

  try {
    const video = await videoService.findVideoById(id);
    if (video) {
      res.status(200).json({
        status: true,
        video: video
      });
    } else {
      res.status(404).json({
        status: false
      });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports.getVideoCount = async (req, res) => {
  let id = req.query.id;
  try {
    let count = await videoService.getVideoCount(id);
    res.status(200).json({ count: count });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
