const dynamoose = require("dynamoose");
const {v4: uuid} = require('uuid');

const userModel = require('./user');

const schema = new dynamoose.Schema({
  _id: {
    type: String,
    hashKey: true,
  },
  userId: {
    type: userModel.model,
    index: {
      name: 'gidx-userId',
      type: 'global',
    },
  },
  date: { type: Date },
  userEmail: { type: String },
  tokenObj: {
    type: Object,
    schema: {
      access_token: { type: String },
      expires_in: { type: Number },
      refresh_token: { type: String },
      scope: { type: String },
      token_type: { type: String },
      id_token: { type: String }
    }
  }
});

module.exports.model = dynamoose.model(process.env.EMAIL_CONFIG_TABLE_NAME, schema);

module.exports.create = data => {
  data._id = uuid();
  data.date = Date.now();
  return this.model.create(data);
}

module.exports.getByUserId = userId => {
  return new Promise((resolve, reject) => {
    this.model.query('userId').eq(userId).using('gidx-userId').all().exec((err, response) => {
      if (err) {
        return reject(err);
      }

      if (response.length > 1) {
        return reject('Multiple users found');
      }

      if (response.length === 0) {
        return resolve(null);
      }

      resolve(response[0]);
    });
  });
}

module.exports.get = id => {
  return this.model.get(id);
}

module.exports.delete = id => {
  return this.model.delete(id);
}
