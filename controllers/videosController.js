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
  const { emails, videoId } = req.body;

  const video = await videoService.findVideoById(videoId);

  const { thumbnail } = video;
  try {
    if (emails.lenght === 0) {
      res.status(400).json({
        message: "no email provided"
      });
      return;
    }
    const result = await sendEmail(videoId, emails, thumbnail);
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
    if (!videos) {
      res.status(400).json({ message: "No Video Available" });
    } else {
      res.status(200).json({ message: videos });
    }
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
      videos = await videoService.findUserVideoByTitle(id, page, search);
      if (!videos) {
        return res.status(400).json({ message: "No video available" });
      }
      res.status(200).json({ message: videos });
    } else {
      videos = await videoService.findUserVideo(id, page);
      if (!videos) {
        return res.status(400).json({ message: "No video available" });
      }
      res.status(200).json({ message: videos });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports.getUserCampaignVideos = async (req, res) => {
  let id = req.query.id;
  let page = req.query.page ? req.query.page : 1;
  let search = req.query.title;

  try {
    let videos = [];
    if (req.query.title !== "" && req.query.title !== undefined) {
      videos = await videoService.findUserCamaignVideoByTitle(id, page, search);
      if (!videos) res.status(400).json({ message: "No video available" });
      return res.status(200).json({ message: videos });
    } else {
      videos = await videoService.findUserCampaignVideo(id, page);
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

module.exports.updateVideoViews = async (req, res) => {
  let videoId = req.body.id;

  try {
    if (!videoId) {
      return res.status(400).json({
        message: "video id not provided"
      });
    }
    const isViewUpdated = await videoService.incrementVideoViews(videoId);
    if (isViewUpdated) {
      return res.status(200).json({
        message: "video views updated",
        video: isViewUpdated
      });
    }
    return res.status(400).json({ message: "video view update failed" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
module.exports.updateVideoWatchCount = async (req, res) => {
  let videoId = req.body.id;
  try {
    if (!videoId) {
      return res.status(400).json({
        message: "video id not provided"
      });
    }
    const isWatchUpdated = await videoService.incrementVideoWatch(videoId);
    if (isWatchUpdated) {
      return res.status(200).json({
        message: "video watch updated",
        video: isWatchUpdated
      });
    }
    return res.status(400).json({ message: "video watch update failed" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
module.exports.updateVideoEmailShare = async (req, res) => {
  let videoId = req.body.id;
  try {
    if (!videoId) {
      return res.status(400).json({
        message: "video id not provided"
      });
    }
    const isEmailShareUpdated = await videoService.incrementVideoEmail(videoId);
    if (isEmailShareUpdated) {
      return res.status(200).json({
        message: "video email share updated",
        video: isEmailShareUpdated
      });
    }
    return res.status(400).json({ message: "video email share update failed" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
// module.exports.getCampaignVideos = async (req, res) => {
//   let { id } = req.query;
//   try {
//     const videos = await videoService.getCampaignVideos(id);

//     if (videos) {
//       return res.status(200).json({
//         message: "success",
//         video: videos,
//       });
//     }
//     return res.status(400).json({ message: "get campaign videos failed" });
//   } catch (error) {
//     return res.status(400).json({ message: error });
//   }
// };

module.exports.deleteVideo = async (req, res) => {
  let { id, pageNo } = req.query;
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
    let videoCount = await videoService.getVideoCount(id);
    let ChatvidCount = await videoService.getChatVidCount(id);
    let totalCount=videoCount+ChatvidCount
    console.log("id",id)
    console.log("videoCount",videoCount)
    console.log("chatvidCount",ChatvidCount)
    await Video.find({ userId: id }, function(err, userVideos) {
      if (userVideos.length < 1)
        return res.status(200).json({
          count: 0,
          viewCount: 0,
          emailShareCount: 0,
          emailOpenCount: 0,
          ctaCount: 0,
          watchCount: 0
        });
      let viewValues = userVideos.map(x => parseInt(x["views"]) || 0);
      let viewCount = viewValues.reduce((a, b) => a + b);
      let emailShareValues = userVideos.map(
        x => parseInt(x["emailShareCount"]) || 0
      );
      let emailShareCount = emailShareValues.reduce((a, b) => a + b);
      let emailOpensValue = userVideos.map(x => parseInt(x["emailOpens"]) || 0);
      let emailOpenCount = emailOpensValue.reduce((a, b) => a + b);
      let ctaValues = userVideos.map(x => parseInt(x["ctaClicks"]) || 0);
      let ctaCount = ctaValues.reduce((a, b) => a + b);
      let watchValues = userVideos.map(x => parseInt(x["watch"]) || 0);
      let watchCount = watchValues.reduce((a, b) => a + b);
// console.log(videoCount,"total",totalCount)
      return res.status(200).json({
        count: totalCount,
        viewCount,
        watchCount,
        emailOpenCount,
        ctaCount,
        emailShareCount
      });
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports.getCampaignCount = async (req, res) => {
  let id = req.query.id;
  try {
    let count = await videoService.getCampaignCount(id);
    console.log("Campaign count",count)
    res.status(200).json({ count: count });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports.trackEmailOpen = async (req, res) => {
  let id = req.query.id;
  try {
    const fs = require("fs");
    const path = require("path");
    let filePath = path.join(__dirname, "..", "temp", "icon.png");
    await videoService.incrementEmailOpen(id);
    fs.readFile(filePath, function(err, data) {
      res.writeHead("200", { "Content-Type": "image/png" });
      res.end(data, "binary");
    });
  } catch (error) {
    res.sendStatus(400);
  }
};
module.exports.updateCtaClicks = async (req, res) => {
  let id = req.body.id;
  try {
    if (!id) {
      return res.status(400).json({
        message: "video id not provided"
      });
    }
    await videoService.incrementCtaClicks(id);
    res.status(200).json({ message: "incremented" });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ message: "failed" });
  }
};
