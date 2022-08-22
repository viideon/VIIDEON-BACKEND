const dynamoose = require("dynamoose");
const { v4: uuid } = require('uuid');

const schema = new dynamoose.Schema({
  _id: {type: String, hashKey: true, default: uuid()},
  url:{type:String},
  title:{type:String}
});

module.exports.model = dynamoose.model(process.env.PUBLIC_MUSIC_ASSETS_TABLE_NAME, schema);

module.exports.create = data => {
  return this.model.create(data);
}

module.exports.find = () => {
  return this.model.scan().all().exec();
}

module.exports.delete = id => {
  return this.model.delete(id);
}
