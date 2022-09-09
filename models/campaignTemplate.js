const dynamoose = require("dynamoose");
const _ = require('lodash');
const { v4: uuid } = require('uuid');

const schema = new dynamoose.Schema({
  _id: { type: String, required: true, hashKey: true},
  name: { type: String, required: true },
  templateDescription: { type: String, required: true },
  totalSteps: { type: Number, required: true },
  templateThumbnailUrl: { type: String },
  industryId: {
    type: String,
    required: true,
    index: {
      name: 'gidx-industryId',
      global: true,
    }
  },
  duration: { type: Number},
  steps: {
    type: Array,
    schema: [{
      type: Object,
      schema: {
        title: { type: String },
        description: { type: String },
        duration: { type: String },
        examples: {
          type: Array,
          schema: [String],
        }
      }
    }]
  }
});

module.exports.model = dynamoose.model(process.env.CAMPAIGN_TEMPLATE_TABLE_NAME, schema, {create: false});

module.exports.create = data => {
  data._id = uuid();
  return this.model.create(data);
}

module.exports.find = () => {
  return new Promise((resolve, reject) => {
    this.model.scan().all().exec((err, response) => {
      if (err) {
        return reject(err);
      }

      resolve(Promise.all(_.map(response, _record => _record.populate())));
    });
  });
}

module.exports.update = async (id, template) => {
  const _record = await this.model.update(id, template);
  return _record.populate();
}

module.exports.findByIndex = (indexName, key, value) => {
  return new Promise((resolve, reject) => {
    this.model.query(key).eq(value).using(indexName).all().exec((err, response) => {
      if (err) {
        return reject(err);
      }

      resolve(Promise.all(_.map(response, _record => _record.populate())));
    })
  });
}

module.exports.delete = id => {
  return this.model.delete(id);
}

module.exports.deleteByIndustryId = async key => {
  const _campaigns = await this.findByIndex('gidx-industry', 'industryId', key.industryId);
  await Promise.all(_.map(_campaigns, _campaign => this.model.delete({id: _campaign.id})));
  return {};
}
