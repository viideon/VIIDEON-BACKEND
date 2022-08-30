const dynamoose = require("dynamoose");
const _ = require('lodash');
const { v4: uuid } = require('uuid');

const campaignTemplateModel = require('./campaignTemplate');

const schema = new dynamoose.Schema({
  _id: { type: String, required: true, hashKey: true, default: uuid()},
  name: { type: String, required: true },
  description: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  styles: {
    type: Set,
    schema: [campaignTemplateModel.model]
  }
}, { timestamps: true });

module.exports.model = dynamoose.model(process.env.INDUSTRY_TABLE_NAME, schema, {create: false});

module.exports.find = () => {
  return new Promise((resolve, reject) => {
    this.model.scan().all().exec((err, response) => {
      if (err) {
        return reject(err);
      }

      resolve (Promise.all(_.map(response, _record => _record.populate())));
    });
  });
}

module.exports.create = data => {
  return this.model.create(data);
}

module.exports.update = async (id, data) => {
  const industry = await this.model.update(id, data);
  return industry.populate();
}

module.exports.delete = id => {
  return this.model.delete(id);
}
