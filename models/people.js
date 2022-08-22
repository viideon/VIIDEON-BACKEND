const dynamoose = require("dynamoose");
const { v4: uuid } = require('uuid');

const userModel = require('./user');

const schema = new dynamoose.Schema({
  _id: {type: String, hashKey: true, default: uuid()},
  userId: {type: userModel.model},
  email: {
    type: String,
    unique: true,
    index: {
      name: 'gidx-email',
      global: true,
    }
  },
  name: {type: String},
  isUser: {type: Boolean}
}, {timestamps: true});

module.exports.model = dynamoose.model(    process.env.PEOPLE_TABLE_NAME, schema);

module.exports.create = data => {
  return this.model.create(data);
}

module.exports.findByEmail = email => {
  return this.model.query('email').eq(email).using('gidx-email').all().exec();
}
