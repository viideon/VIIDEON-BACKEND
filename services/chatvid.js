const interactiveModel = require("../models/interactive")
const Reply = require("../models/reply");
const People = require("../models/people");
const Step = require("../models/step");
const choiceModel = require("../models/choices");
const videoModel = require("../models/videos");
const Metrics = require('../models/metrics')
const _ = require('lodash');

const saveVideo = (video) => {
  return videoModel.create({ ...video })
}

const createChatvid = ({ name, userId, steps, people, thumbnail, branding }) => {
  return interactiveModel.create({
    name,
    userId,
    steps,
    people,
    thumbnail,
    branding,
  });
}

const registerPeople = (person) => {
  const regPerson = new People({ ...person });
  return regPerson.save();
}

const saveStep = (step) => {
  const newStep = new Step({ ...step })
  return newStep.save();
}

const saveChoice = (_choice) => {
  return choiceModel.create({ ..._choice });
}

const updateChoice = (_id, reply) => {
  return choiceModel.update({ _id }, { $ADD: { replies: reply } })
}
const saveReply = (reply) => {
  const newReply = new Reply({ ...reply });
  return newReply.save();
}

const updateChatvidStep = (_id, step) => {
  return interactiveModel.update({ _id }, { $ADD: { steps: step } })
}

const updateChatvidSteps = (_id, steps) => {
  return interactiveModel.update({_id}, { steps})
}

const getChatvidById = async (_id) => {
  const vid = await interactiveModel.get({ _id });
  return vid.populate();
}
const getSingleChatvidById = async (_id) => {
  const vid = await interactiveModel.get({ _id });
  return vid.populate();
}

const getChatvidByUserId = async (userId) => {
  let records = await interactiveModel.findByUserId(userId);
  records = _.reverse(_.sortBy(records, ['_id']));
  return _.map(records, record => record.populate());
}

const getStepById = (_id) => {
  return Step.findOne({ _id }).lean();
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
  return interactiveModel.update({ _id }, { $ADD: { people: people } })
}

const getPeopleByEmail = (email) => {
  return People.findOne({ email }).lean();
}

const saveMetrics = (payload) => {
  let metrics = new Metrics({ ...payload });
  return metrics.save();
}
const deleteChatvid = async (id) => {
  await interactiveModel.delete({_id: id});
}
const getMetrics = (chatvidId, dateFrom, dateTo, deviceType, isInteracted, isCompleted, isAnswered) => {
  var _dateTo = new Date(dateTo)
  var _dateFrom = new Date(dateFrom)
  dateTo.setDate(dateTo.getDate() +1)
  dateFrom.setDate(dateFrom.getDate() -1)
  if(deviceType === "all") {
    return Metrics.find({ chatvidId, createdAt: { $gte: _dateFrom, $lte: _dateTo } }).lean();
  } else {
    return Metrics.find({ chatvidId, createdAt: { $gte: _dateFrom, $lte: _dateTo }, deviceType }).lean();
  }
}
module.exports = {
  createChatvid,
  registerPeople,
  updateChatvidStep,
  updateChatvidSteps,
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
  deleteChatvid,
  getSingleChatvidById,
};