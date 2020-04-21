const User = require("../models/user");
// const { hashPassword } = require("./../helpers/helper");

// const createUser = async newUser => {
//   const hash = await hashPassword(newUser.password);
//   const user = new User({
//     email: newUser.email,
//     firstName: newUser.firstName,
//     lastName: newUser.lastName,
//     userName: newUser.userName,
//     password: hash
//   });
//   return user.save();
// };
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
  findUserByEmail,
  updateUser,
  getAllUsers
};
