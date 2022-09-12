const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require('../util/config');

const hashPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
const comparePassword = async (password, encryptPassword) => {
  return await bcrypt.compare(password, encryptPassword);
};
const generateToken = async user => {
  const appConfig = await config.getConfig();

  return jwt.sign({ user }, `${await appConfig.get('SECRET_KEY')}`);
};
const verifyToken = async token => {
  const appConfig = await config.getConfig();

  return jwt.verify(`${token}`, `${await appConfig.get('SECRET_KEY')}`);
};

module.exports = { hashPassword, comparePassword, generateToken, verifyToken };
