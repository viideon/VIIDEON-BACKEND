const User = require("../models/user");
const { hashPassword } = require("./../helpers/helper");

const createUser = async user => {
  const hash = await hashPassword(user.password);
  const user = new User({
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    password: hash
  });
  return user.save();
};
const findUserByEmail = email => {
  return User.findOne({ email: email });
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
  createUser,
  findUserByEmail,
  updateUser,
  getAllUsers
};
