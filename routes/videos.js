const route = require("express").Router();
const Video = require("../models/videos");
const { sendEmail } = require("../helpers/email");
const videoService = require("../services/videoService");

route.post("/", async (req, res) => {
  try {
    const url = await Video.findOne({ url: req.body.url });

    if (url) return res.status(400).json({ message: "URL is already taken" });
    const video = new Video({
      ...req.body
    });
    video.save();
    if (req.body.recieverEmail !== "") {
      await sendEmail(video.url, req.body.recieverEmail, req, res);
    } else {
      return res
        .status(201)
        .json({ video: video, message: "sucessfully saved" });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

route.get("/", async (req, res) => {
  try {
    const videos = await Video.find();

    if (!videos) res.status(400).json({ message: "No Video Available" });
    res.status(200).json({ message: videos });
  } catch (error) {
    res.status(400).json(error);
  }
});

route.get("/user", async (req, res) => {
  let id = req.query.id;
  try {
    const videos = await Video.find({ userId: id });
    if (!videos) res.status(400).json({ message: "No video available" });
    res.status(200).json({ message: videos });
  } catch (error) {
    res.status(400).json(error);
  }
});

route.patch("/", async (req, res) => {
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
});

route.delete("/video", async (res, res) => {
  let videoId = req.body.videoId;
  let userId = req.body.userId;

  try {
    const res = await videoService.deleteVideo(videoId, userId);
    if (res) {
      return res.status(200).json({
        message: "video deleted"
      });
    }
    return res.status(400).json({
      message: "failed to delete video"
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

route.get("/", (req, res) => {
  res.send("Server is running ");
});
module.exports = route;
