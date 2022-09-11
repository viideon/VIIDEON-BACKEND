const _ = require('lodash');

const emailConfigModel = require("../models/emailConfig");

const saveEmailConfig = object => {
  return emailConfigModel.create({
    ...object
  });
};
const findUserConfig = async userId => {
  const config = await emailConfigModel.getByUserId(userId);
  return _.pick(config, ['userId', 'userEmail', '_id', 'date']);
};
const findUserTokenObj = userId => {
  return emailConfigModel.getByUserId(userId);
};
const findEmailConfig = id => {
  return emailConfigModel.get({ _id: id });
};
const deleteConfigById = id => {
  return emailConfigModel.delete({ _id: id });
};
module.exports = {
  saveEmailConfig,
  findUserConfig,
  findUserTokenObj,
  findEmailConfig,
  deleteConfigById
};
