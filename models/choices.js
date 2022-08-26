const dynamoose = require("dynamoose");
const { v4: uuid } = require('uuid');

const interactiveModel = require('./interactive');
const replyModel = require('./reply');
const stepModel = require('./step');
const userModel = require('./user');

const schema = new dynamoose.Schema({
  _id: {type: String, required: true, hashKey: true, default: uuid()},
  chatvidId: {type: interactiveModel.model},
  stepId: {type: stepModel.model},
  replies: [{type: replyModel.model}],
  text: {type: String},
  userId: {type: userModel.model}
}, {timestamps: true});

module.exports.model = dynamoose.model(process.env.CHOICES_TABLE, schema, {create: false});

module.exports.create = data => {
  return this.model.create(data);
}

module.exports.update = (id, data) => {
  return this.model.update(id, data);
}
