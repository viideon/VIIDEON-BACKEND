const userModel = require("../models/user");
const Setting = require("../models/setting");

const findUserByEmail = email => {
  return userModel.getByEmail( email );
};

const findByNameEmail = (email, name) => {
  return userModel.findByNameAndEmail(email, name);
};
const getUserById = id => {
  return userModel.get({ _id: id });
};
const verifyUser = _id => {
  return userModel.updateOne({ _id }, { isVerified: true });
};

const createNewUser = (email, firstName, lastName, userName, hash) => {
  return userModel.save({
    email: email,
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    password: hash
  });
};

const updateUser = (userId, user) => {
  return userModel.update(
    { _id: userId },
    {
      $set: { ...user }
    },
    { new: true }
  );
};
const updatePassword = (_id, password) => {
  return userModel.update(
    { _id },
    {
      $set: { password }
    },
    { new: true }
  );
};
const getAllUsers = async () => {
  // const skip = pageSize * (pageNo - 1);
  // TODO: Rewrite to use keys for pagination
  // let count = await userModel.count();
  let users = await userModel.find();
  return {count: users.length, users}
};
const deleteUser = id => {
  return userModel.delete({ _id: id });
};

const saveSetting = (setting) => {
  let newSet = new Setting({...setting});
  return newSet.save();
}

const updateSetting = (_id, userId, setting) => {
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
  return userModel.delete({_id: id});
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
