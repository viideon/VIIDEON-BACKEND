const dynamoose = require('dynamoose');
const {v4: uuid} = require('uuid');

const peopleModel = require('./people');
const stepModel = require('./step');
const userModel = require('./user');

const schema = new dynamoose.Schema(
  {
    _id: {type: String, hashKey: true, default: uuid()},
    name: {type: String, trim: true},
    branding: {type: Boolean},
    thumbnail: {type: String},
    steps: [stepModel.model],
    people: [peopleModel.model],
    userId: {
      type: userModel.model,
      index: {
        name: 'gidx-userId',
        type: 'global',
      },
    },
  },
  {timestamps: true},
);

module.exports.model = dynamoose.model(process.env.INTERACTIVE_TABLE_NAME, schema);

module.exports.create = data => {
  return this.model.create(data);
};

module.exports.update = (id, data) => {
  return this.model.update(id, data);
};

module.exports.get = id => {
  return this.model.get(id);
};

module.exports.findByUserId = userId => {
  return this.model.query('userId').eq(userId).using('gidx-userId').exec();
};

module.exports.countDocumentsByUserId = userId => {
  return this.model.query('userId').eq(userId).count().exec();
};

module.exports.delete = id => {
  return this.model.delete(id);
};