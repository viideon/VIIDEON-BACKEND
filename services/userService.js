const User = require("../models/user");

const findUserByEmail = email => {
  return User.findOne({ email: email });
};

const findByNameEmail = (email, name) => {
  return User.findOne({ $or: [{ email: email }, { userName: name }] });
};

const updateUser = (userId, user) => {
  return User.updateOne(
    { _id: userId },
    {
      $set: { ...user }
    }
  );
};
const getAllUsers = () => {
  return User.find();
};
module.exports = {
  findUserByEmail,
  updateUser,
  getAllUsers,
  findByNameEmail
};
