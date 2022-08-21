const dynamoose = require("dynamoose");
const { v4: uuid } = require('uuid');

const userModel = require('./user');

const schema = new dynamoose.Schema({
  id: {type: String, required: true, hashKey: true, default: uuid()},
  chatvidId: {type: mongoose.Schema.Types.ObjectId, ref: 'InteractiveMessage'},
  stepId: {type: mongoose.Schema.Types.ObjectId, ref: 'Step'},
  replies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reply'}],
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
