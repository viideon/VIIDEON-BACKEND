const interactiveModel = require("../models/interactive")
const replyModel = require("../models/reply");
const peopleModel = require("../models/people");
const stepModel = require("../models/step");
const choiceModel = require("../models/choices");
const videoModel = require("../models/videos");
const metricsModel = require('../models/metrics')
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
  return peopleModel.create({ ...person });
}

const saveStep = (step) => {
  return stepModel.create({ ...step })
}

const saveChoice = (_choice) => {
  return choiceModel.create({ ..._choice });
}

const updateChoice = (_id, reply) => {
  return choiceModel.update({ _id }, { $ADD: { replies: reply } })
}
const saveReply = (reply) => {
  return replyModel.create({ ...reply });
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
  return stepModel.get({ _id });
}
const updateStepReply = (_id, reply) => {
  return stepModel.update({ _id }, { $ADD: { replies: reply } });
}
const updateStepChoice = (_id, choice) => {
  return stepModel.update({ _id }, { $ADD: { choices: choice } });
}
const updateStep = (_id, data) => {
  return stepModel.update({ _id }, { ...data });
}
const updateChatvidPeople = async (_id, people) => {
  return interactiveModel.update({ _id }, { $ADD: { people: people } })
}

const getPeopleByEmail = (email) => {
  return peopleModel.findByEmail({ email });
}

const saveMetrics = (payload) => {
  return metricsModel.create({ ...payload });
}
const deleteChatvid = async (id) => {
  await interactiveModel.delete({_id: id});
}
const getMetrics = (chatvidId, dateFrom, dateTo, deviceType, isInteracted, isCompleted, isAnswered) => {
  const _dateTo = new Date(dateTo)
  const _dateFrom = new Date(dateFrom)
  dateTo.setDate(dateTo.getDate() +1)
  dateFrom.setDate(dateFrom.getDate() -1)
  if(deviceType === "all") {
    return metricsModel.findByChatvidId(chatvidId, _dateFrom, _dateTo);
  } else {
    return metricsModel.findByChatvidId(chatvidId, _dateFrom, _dateTo, deviceType);
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