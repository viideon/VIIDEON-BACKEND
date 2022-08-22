const dynamoose = require("dynamoose");
const { v4: uuid } = require('uuid');

const userModel = require('./user');

const schema = new dynamoose.Schema(
  {
    _id: {type: String, hashKey: true, default: uuid()},
    userId: {
      type: userModel.model,
      rangeKey: true,
      index: {
        name: 'gidx-userIdName',
        global: true,
        rangeKey: 'name',
      }
    },
    name: { type: String },
    logoUrl: { type: String },
    text: { type: String },
    fbUrl: {
      type: String,
    },
    twitterUrl: {
      type: String,
    },
    youtubeUrl: {
      type: String,
    },
    linkedinUrl: {
      type: String,
    },
    colors: {},
  },
  { timestamps: true }
);

module.exports.model = dynamoose.model(process.env.SETTING_TABLE_NAME, schema);

module.exports.create = data => {
  return this.model.create(data);
}

module.exports.update = (id, data) => {
  return this.model.update(id, data);
}

module.exports.findByUserId = userId => {
  return this.model.query('userId').eq(userId).using('gidx-userIdName').all().exec();
}

module.exports.findByUserIdAndName = (userId, name) => {
  return this.model.query('userId').eq(userId).where('name').eq(name).using('gidx-userIdName').all().exec();
}

module.exports.findById = id => {
  return this.model.query('_id').eq(id).all().exec();
}
