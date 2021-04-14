const User = require("../models/user");
const Setting = require("../models/setting");

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
  console.log(users)
  return {count, users}
};
const deleteUser = id => {
  return User.deleteOne({ _id: id });
};

const saveSetting = (setting) => {
  let newSet = new Setting({...setting});
  return newSet.save();
}

const updateSetting = (_id, userId, setting) => {
  console.log("updateSetting",setting)
  return Setting.updateOne({_id, userId}, {...setting});
}

const getSettingsByUserID = (userId) => {
  return Setting.find({userId});
}

const getSettingsByID = (_id) => {
  return Setting.find({_id})
}

const getSetttingByUserIDAndName = (userId, name) => {
  return Setting.find({userId, name});
}

const removeUserById = async (id) => {
  const user = await User.findById(id)
  console.log('service',user);
  return user.remove()
}
module.exports = {
  findUserByEmail,
  updateUser,
  getAllUsers,
  findByNameEmail,
  createNewUser,
  getUserById,
  verifyUser,
  updatePassword,
  deleteUser,
  saveSetting,
  updateSetting,
  getSettingsByUserID,
  getSettingsByID,
  getSetttingByUserIDAndName,
  removeUserById
};
