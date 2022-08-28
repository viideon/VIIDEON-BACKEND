const dynamoose = require("dynamoose");
const {v4: uuid} = require('uuid');

const userModel = require('./user');

const schema = new dynamoose.Schema({
  _id: {type: String, hashKey: true, default: uuid()},
  userId: {
    type: userModel.model,
    required: true,
  },

  token: {
    type: String,
    required: true,
    index: {
      name: 'gidx-token',
      global: true,
    },
  },
});

module.exports.model = dynamoose.model(process.env.TOKEN_TABLE, schema, {create: false});

module.exports.create = data => {
  return this.model.create(data);
}

module.exports.getByToken = token => {
  return new Promise((resolve, reject) => {
    this.model.query('token').eq(token).using('gidx-token').all().exec((err, response) => {
      if (err) {
        return reject(err);
      }

      if (response.length !== 1) {
        return resolve(null);
      }

      return resolve(response[0]);
    });
  });
}
