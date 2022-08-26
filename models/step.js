const dynamoose = require("dynamoose");
const {v4: uuid} = require('uuid');

const choicesModel = require('./choices');
const interactiveModel = require('./interactive');
const replyModel = require('./reply');
const videoModel = require('./videos');

const schema = new dynamoose.Schema({
  _id: {type: String, hashKey: true, default: uuid()},
  roomId: { type: interactiveModel.model },
  stepNo: { type: String },
  videoId: { type: videoModel.model },
  replies: [{ type: replyModel.model }],
  isFull: { type: Boolean, default: false },
  isAudio: { type: Boolean, default: false },
  isVideo: { type: Boolean, default: false },
  isText: { type: Boolean, default: false },
  text: { type: String },
  calendar: { type: String },
  responseType: { type: String },
  choices: [{ type: choicesModel.model }],
  jumpTo: { type: Number },
  jumpChoice: {}
}, { timestamps: true });

module.exports.model = dynamoose.model(process.env.STEP_TABLE_NAME, schema);

module.exports.create = (data) => {
  return this.model.create(data);
}

module.exports.get = _id => {
  return this.model.get(_id);
}

module.exports.update = (_id, data) => {
  return this.model.update(_id, data);
}
