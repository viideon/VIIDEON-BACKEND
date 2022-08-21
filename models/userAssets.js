const dynamoose = require("dynamoose");
const { v4: uuid } = require('uuid');

const userModel = require('./user');

const userAssets = new dynamoose.Schema({
  _id: { type: String, default: uuid(), hashKey: true },
  userId: {
    type: userModel.model,
    index: {
      name: 'gidx-userId',
      global: true,
    }
  },
  assets: [{ type: { type: String }, url: String }],
  musicAssets: [{ url: String, title: String }]
});

module.exports.model = dynamoose.model(process.env.USER_ASSETS_TABLE_NAME, userAssets);

module.exports.update = (userId, asset) => {
  return this.model.update(userId, asset);
}

module.exports.findByUserId = userId => {
  return new Promise((resolve, reject) => {
    this.model.query('userId').eq(userId).using('gidx-userId').all().exec((err, response) => {
      if (err) {
        return reject(err);
      }

      resolve(response);
    });
  });
}

module.exports.find = () => {
  return new Promise((resolve, reject) => {
    this.model.scan().all().exec((err, response) => {
      if (err) {
        return reject(err);
      }

      resolve(response);
    })
  })
}
