const InterActiveMessage = require("../models/interactive")
const Reply = require("../models/reply");
const People = require("../models/people");
const Step = require("../models/step");
const Choice = require("../models/choices");
const Video = require("../models/videos");

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

const saveStep = ({ replies, isFull, isAudio, isVideo, isText, choices, stepNo, videoId, responseType, calendar, text }) => {
  const newStep = new Step({
    replies,
    isFull,
    isAudio,
    isVideo,
    isText,
    choices,
    stepNo,
    videoId,
    responseType,
    calendar,
    text,
  })
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
    .populate("userId")
    .populate({ path: "steps", populate: [{ path: "videoId" }, { path: "choices" }] })
    .lean()
}

const getChatvidByUserId = async (userId) => {
  return InterActiveMessage.find({ userId })
    .sort({ _id: -1 })
    .populate("people")
    .populate({ path: "steps", populate: [{ path: "videoId" }, { path: "replies", populate: { path: "poepleId" } }, { path: "choices" }] })
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




const getReplyById = (_id) => {
  return Reply.find({ _id })
    .populate("peopleId")
    .populate("stepId")
    .populate("userId")
    .populate("videoId")
    .lean();
}

const getReplyByChatvidId = (interActiveId) => {
  return Reply.find({ interActiveId })
    .populate("peopleId")
    .populate("stepId")
    .populate("userId")
    .populate("videoId")
    .lean();
}

const getReplyByUser = (userId) => {
  return Reply.find({ userId })
    .populate("stepId")
    .populate("videoId")
    .populate("videoId")
    .lean();
}

const getReplyByPeople = (peopleId) => {
  return Reply.find({ peopleId })
    .populate("videoId")
    .populate("stepId")
    .lean();
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
};