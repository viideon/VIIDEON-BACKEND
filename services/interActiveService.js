const InterActiveMessage = require("../models/interactive")
const Reply = require("../models/reply")
const People = require("../models/people");
const Step = require("../models/step")

const createInterActiveMessage = (interActiveMessage) => {
  const interActive = new InterActiveMessage({...interActiveMessage});
  return interActive.save();
}

const registerPeople = (person) => {
  const regPerson = new People({...person});
  return regPerson.save();
}

const saveStep = (step) => {
  const newStep = new Step({...step})
  return newStep.save();
}

const saveReply = (reply) => {
  const newReply = new Reply({...reply});
  return newReply.save();
}

const getInterActiveMessage = (_id) => {
  return InterActiveMessage.find({_id})
  .populate("steps")
  .populate("userId")
  .populate("peoples")
  .lean();
}

const getInterActiveMessageByUserId = (userId) => {
  return InterActiveMessage.find({userId})
  .populate("steps")
  .populate("userId")
  .populate("peoples")
  .lean();
}

const getStep = (_id) => {
  return Step.find({_id})
  .populate("videoId")
  .populate("replies")
}

const getReply = (_id) => {
  return Reply.find({_id})
  .populate("peopleId")
  .populate("stepId")
  .populate("userId")
  .populate("videoId")
  .lean();
}

const getReplyByInterActive = (interActiveId) => {
  return Reply.find({interActiveId})
  .populate("peopleId")
  .populate("stepId")
  .populate("userId")
  .populate("videoId")
  .lean();
}

const getReplyByUser = (userId) => {
  return Reply.find({userId})
  .populate("stepId")
  .populate("videoId")
  .populate("videoId")
  .lean();
}

const getReplyByPeople = (peopleId) => {
  return Reply.find({peopleId})
  .populate("videoId")
  .populate("stepId")
  .lean();
}
module.exports = {
  createInterActiveMessage,
  registerPeople,
  saveStep,
  saveReply,
};