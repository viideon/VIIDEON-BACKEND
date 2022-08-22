const dynamoose = require("dynamoose");
const { v4: uuid } = require('uuid');

const interactiveModel = require('./interactive');

const metricsSchema = new dynamoose.Schema({
  _id: {type: String, hashKey: true, default: uuid()},
  chatvidId: {
    type: interactiveModel.model,
    index: {
      name: 'gidx-chatvidId',
      global: true,
    },
  },
  deviceType: {type: String},
  isLanded: {type:Boolean},
  isInteracted: {type:Boolean},
  isAnswered: {type:Boolean},
  isCompleted: {type:Boolean},
}, {timestamps: true});

module.exports.model = dynamoose.model(process.env.    METRICS_TABLE_NAME, metricsSchema);

module.exports.findByChatvidId = (chatvidId, dateFrom, dateTo, deviceType = 'all') => {
  let query = this.model.query('chatvidId').eq(chatvidId).using('gidx-chatvidId').where('createdAt').le(dateTo).where('createdAt').ge(dateFrom);
  if (deviceType !== 'all') {
    query = query.where('deviceType').eq(deviceType);
  }
  return query.all().exec();
}