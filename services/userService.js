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
const getAllUsers = async (pageNo, pageSize) => {
  const skip = pageSize * (pageNo - 1);
  let count = await User.count();
  let users = await User.find().skip(skip).limit(Number(pageSize));
  return {count, users}
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
