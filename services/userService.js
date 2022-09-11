const userModel = require("../models/user");
const settingModel = require("../models/setting");

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
  return userModel.update({ _id }, { isVerified: true });
};

const createNewUser = (email, firstName, lastName, userName, hash) => {
  return userModel.create({
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
    user,
    { new: true }
  );
};
const updatePassword = (_id, password) => {
  return userModel.update(
    { _id },
    {
      password
    }
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
  console.log('Deleting user', id);
  return userModel.delete({ _id: id });
};

const saveSetting = (setting) => {
  return settingModel.create({...setting});
}

const updateSetting = (_id, userId, setting) => {
  console.log('updateSetting', _id, userId, setting);
  return settingModel.update({_id, userId}, {...setting});
}

const getSettingsByUserID = (userId) => {
  return settingModel.findByUserId(userId);
}

const getSettingsByID = (_id) => {
  return settingModel.findById(_id);
}

const getSetttingByUserIDAndName = (userId, name) => {
  return settingModel.findByUserIdAndName(userId, name);
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
