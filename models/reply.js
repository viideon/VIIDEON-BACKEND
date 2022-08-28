const dynamoose = require("dynamoose");
const { v4: uuid } = require('uuid');

const choicesModel = require('./choices');
const peopleModel = require('./people');
const videoModel = require('./videos');

const schema = new dynamoose.Schema({
  _id: {type: String, hashKey: true, default: uuid()},
  chatvidId: String,
  stepId: String,
  videoId: videoModel.model,
  peopleId: peopleModel.model,
  choiceId: {type: choicesModel.model},
  url: {type: String},
  text: {type: String},
  calendar: {type: String},
  type: {type: String}
}, {timestamps: true});

module.exports.model = dynamoose.model(process.env.REPLY_TABLE_NAME, schema);

module.exports.create = data => {
  return this.model.create(data);
}
