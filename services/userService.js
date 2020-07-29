const User = require("../models/user");

const findUserByEmail = email => {
  return User.findOne({ email: email });
};

const findByNameEmail = (email, name) => {
  return User.findOne({ $or: [{ email: email }, { userName: name }] });
};
const getUserById = id => {
  return User.findOne({ _id: id });
};
const verifyUser = _id => {
  return User.updateOne({ _id }, { $set: { isVerified: true } });
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
const updatePassword = (_id, password) => {
  return User.findOneAndUpdate(
    { _id },
    {
      $set: { password }
    },
    { new: true }
  );
};
const getAllUsers = () => {
  return User.find();
};
const deleteUser = id => {
  return User.deleteOne({ _id: id });
};
module.exports = {
  findUserByEmail,
  updateUser,
  getAllUsers,
  findByNameEmail,
  createNewUser,
  getUserById,
  verifyUser,
  updatePassword,
  deleteUser
};
