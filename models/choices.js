const dynamoose = require("dynamoose");
const { v4: uuid } = require('uuid');

const userModel = require('./user');

const schema = new dynamoose.Schema({
  _id: {type: String, required: true, hashKey: true, default: uuid()},
  chatvidId: String,
  stepId: String,
  replies: {
    type: Set,
    schema: [String],
  },
  text: {type: String},
  userId: {type: userModel.model}
}, {timestamps: true});

module.exports.model = dynamoose.model(process.env.CHOICES_TABLE_NAME, schema, {create: false});

module.exports.create = data => {
  return this.model.create(data);
}

module.exports.update = (id, data) => {
  return this.model.update(id, data);
}
