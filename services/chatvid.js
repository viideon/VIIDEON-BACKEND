const InterActiveMessage = require("../models/interactive")
const Reply = require("../models/reply");
const People = require("../models/people");
const Step = require("../models/step");
const Choice = require("../models/choices");
const Video = require("../models/videos");
const Metrics = require('../models/metrics')

const saveVideo = (video) => {
  let newVideo = new Video({ ...video })
  return newVideo.save();
}

const createChatvid = ({ name, userId, steps, people, thumbnail, branding }) => {
  const interActive = new InterActiveMessage({
    name,
    userId,
    steps,
    people,
    thumbnail,
    branding,
  });
  return interActive.save();
}

const registerPeople = (person) => {
  const regPerson = new People({ ...person });
  return regPerson.save();
}

const saveStep = (step) => {
  const newStep = new Step({ ...step })
  return newStep.save();
}

const saveChoice = (choice) => {
  let option = new Choice({ ...choice });
  return option.save();
}

const updateChoice = (_id, reply) => {
  return Choice.updateOne({ _id }, { $push: { replies: reply } })
}
const saveReply = (reply) => {
  const newReply = new Reply({ ...reply });
  return newReply.save();
}

const updateChatvidStep = (_id, step) => {
  return InterActiveMessage.updateOne({ _id }, { $push: { steps: step } })
}

const getChatvidById = (_id) => {
  return InterActiveMessage.find({ _id })
    .populate({ path: "steps", populate: [{ path: "videoId" }, { path: "choices" }] })
    .populate("userId")
    .lean()
}

const getChatvidByUserId = async (userId) => {
  return InterActiveMessage.find({ userId })
    .sort({ _id: -1 })
    .populate("people")
    .populate({ path: "steps", populate: [{ path: "videoId" }, { path: "replies", populate: { path: "peopleId" } }, { path: "choices", populate: { path: "replies", select: "peopleId" } }] })
    .lean();
}

const getStepById = (_id) => {
  return Step.find({ _id })
    .populate("videoId")
    .populate("replies")
}
const updateStepReply = (_id, reply) => {
  return Step.updateOne({ _id }, { $push: { replies: reply } });
}
const updateStepChoice = (_id, choice) => {
  return Step.updateOne({ _id }, { $push: { choices: choice } });
}
const updateStep = (_id, data) => {
  return Step.updateOne({ _id }, { ...data });
}
const updateChatvidPeople = async (_id, people) => {
  return InterActiveMessage.updateOne({ _id }, { $push: { people: people } })
}

const getPeopleByEmail = (email) => {
  return People.findOne({ email }).lean();
}

const saveMetrics = (payload) => {
  let metrics = new Metrics({ ...payload });
  return metrics.save();
}

const getMetrics = (chatvidId, deviceType, isInteracted, isAnswered, isCompleted) => {
  return Metrics.find({ chatvidId }).lean();
}
module.exports = {
  createChatvid,
  registerPeople,
  updateChatvidStep,
  saveStep,
  saveReply,
  saveVideo,
  getChatvidByUserId,
  getStepById,
  getChatvidById,
  updateStepReply,
  updateChatvidPeople,
  getPeopleByEmail,
  saveChoice,
  updateChoice,
  updateStepChoice,
  updateStep,
  saveMetrics,
  getMetrics,
};