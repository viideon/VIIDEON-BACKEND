const emailConfig = require("../models/emailConfig");

const saveEmailConfig = object => {
  const config = new emailConfig({
    ...object
  });
  return config.save();
};
const findUserConfig = userId => {
  return emailConfig.find({ userId: userId }, "userId userEmail _id date");
};
const findUserTokenObj = userId => {
  return emailConfig.find({ userId: userId });
};
const findEmailConfig = id => {
  return emailConfig.findOne({ _id: id });
};
const deleteConfigById = id => {
  return emailConfig.deleteOne({ _id: id });
};
module.exports = {
  saveEmailConfig,
  findUserConfig,
  findUserTokenObj,
  findEmailConfig,
  deleteConfigById
};
