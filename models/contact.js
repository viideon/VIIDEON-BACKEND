const dynamoose = require("dynamoose");
const {v4: uuid} = require('uuid');

const userModel = require('./user');

const schema = new dynamoose.Schema({
  _id: {type: String, required: true, hashKey: true, default: uuid()},
  avatarUrl: { type: String },
  company: { type: String },
  displayName: { type: String, required: false },
  userId: { type: userModel.model },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  email: { type: String },
  firstName: { type: String },
  fullName: { type: String },
  lastName: { type: String },
  mobile: { type: String },
  notes: { type: String },
  phone: { type: String },
  source: { type: String },
  stage: { type: String },
  tags: [String],
  title: { type: String },
  unsubscribed: { type: Boolean },
  unsubscribedEmail: { type: String }
});

module.exports.model = mongoose.model(process.env.CONTACT_TABLE_NAME, schema);

module.exports.create = data => {
  return this.model.create(data);
}
