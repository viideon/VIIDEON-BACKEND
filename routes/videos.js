const route = require("express").Router();
const Video = require('../models/videos');
const User = require('../models/user');
const { sendEmail } = require('../helpers/email');

route.post("/", async (req, res) => {
  try {
    const url = await Video.findOne({ url: req.body.url });
    if (url) res.status(400).json({ message: "URL is already taken" });
    const video = new Video({
      ...req.body
    });
    video.save();
    await sendEmail(video.url, req.body.recieverEmail, req, res);
    res.status(201).json({ video: video, message: "Successfully Updated! and email sent" });
  } catch (error) {
    res.status(400).json(error);
  }
});

route.get("/", async (req, res) => {
  try {
    const videos = await Video.find();
    if (!videos) res.status(400).json({ message: "No Video Available" });
    res
      .status(201)
      .json({ message: videos });
  } catch (error) {
    res.status(400).json(error);
  }
});
route.get("/", (req, res) => {
  res.send("Server is running ");
});
module.exports = route;