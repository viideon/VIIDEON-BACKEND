const User = require("../models/user");

const findUserByEmail = email => {
  return User.findOne({ email: email });
};

const findByNameEmail = (email, name) => {
  return User.findOne({ $or: [{ email: email }, { userName: name }] });
};

const createNewUser = (email, firstName, lastName, userName, hash) => {
  const user = new User({
    email: email,
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    password: hash
  });
  return user.save();
};

const updateUser = (userId, user) => {
  return User.findOneAndUpdate(
    { _id: userId },
    {
      $set: { ...user }
    },
    { new: true }
  );
};
const getAllUsers = () => {
  return User.find();
};
module.exports = {
  findUserByEmail,
  updateUser,
  getAllUsers,
  findByNameEmail,
  createNewUser
};
