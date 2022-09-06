const dynamoose = require("dynamoose");
const { v4: uuid } = require('uuid');
const _ = require('lodash');

const userModel = require('./user');

const userAssets = new dynamoose.Schema({
  _id: { type: String, hashKey: true },
  userId: {
    type: userModel.model,
    index: {
      name: 'gidx-userId',
      global: true,
    }
  },
  assets: {
    type: Array,
    schema: [{ type: Object, schema: { type: String, url: String, _id: String } }]
  },
  musicAssets: {
    type: Array,
    schema: [{ type: Object, schema: { url: String, title: String, _id: String } }]
  }
});

module.exports.model = dynamoose.model(process.env.USER_ASSETS_TABLE_NAME, userAssets);

module.exports.create = (userId, {asset = null, musicAsset = null}) => {
  const data = {
    _id: uuid(),
    userId,
    assets: [],
    musicAssets: [],
  }
  if (!_.isNil(asset)) {
    data.assets.push(asset);
  }
  if (!_.isNil(musicAsset)) {
    data.musicAssets.push(musicAsset);
  }
  console.log('Creating asset', {data});
  return this.model.create(data)
}

module.exports.update = (id, asset) => {
  console.log('Updating asset', id, asset);
  return this.model.update(id, asset);
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
