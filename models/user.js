const dynamoose = require("dynamoose");
const tokenModel = require("./token");
const randomstring = require("randomstring");
const { v4: uuid } = require('uuid');

const schema = new dynamoose.Schema({
  _id: { type: String, required: true, default: uuid(), hashKey: true },
  email: {
    type: String,
    unique: true,
    required: true,
    index: {
      name: 'gidx-email',
      global: true,
    }
  },
  firstName: { type: String, minlength: 3, required: true },
  lastName: { type: String, minlength: 2, required: true },
  userName: { type: String, unique: true, required: true },
  password: { type: String, minlength: 6, required: true },
  mobileNumber: { type: String, minlength: 12, required: false },
  businessPhone: { type: String, minlength: 12, required: false },
  address: { type: String, required: false },
  webAddress: { type: String, minlength: 3, required: false },
  facebookAddress: { type: String, required: false },
  twitterAddress: { type: String, required: false },
  youtubeAddress: { type: String, required: false },
  linkedinAddress: { type: String, required: false },
  timeZone: { type: String, required: false },
  affiliateId: { type: String, required: false },
  url: { type: String, required: false },
  
  isVerified: {
    type: Boolean,
    default: false
  }
});

module.exports.model = dynamoose.model(process.env.USER_TABLE, schema, {create: false});

module.exports.create = (data) => {
  return this.model.create(data);
}

module.exports.generateVerificationToken = function() {
  let payload = {
    userId: this._id,
    token: randomstring.generate({
      length: 6,
      charset: "numeric"
    })
  };

  return tokenModel.create(payload);
};

module.exports.get = _id => {
  return this.model.get(_id);
}

module.exports.getByEmail = email => {
  return new Promise((resolve, reject) => {
    this.model.query('email').eq(email).using('idx-email').all().exec((err, response) => {
      if (err) {
        return reject(err);
      }

      if (response.length > 1) {
        return reject(new Error('Invalid user data found'));
      }

      if (response.length === 0) {
        return resolve(null);
      }

      return resolve(response[0]);
    });
  });
}

module.exports.findByNameAndEmail = (email, name) => {
  return new Promise((resolve, reject) => {
    this.model.scan().where('email').eq(email).or().where('name').eq(name).all().exec((err, response) => {
      if (err) {
        return reject(err);
      }

      if (response.length > 1) {
        return reject(new Error('Invalid user data found'));
      }

      if (response.length === 0) {
        return resolve([]);
      }

      return resolve(response);
    });
  });
}

module.exports.updateOne = (userId, data) => {
  return this.model.update(userId, data);
}

module.exports.update = (userId, data) => {
  return this.model.update(userId, data);
}

module.exports.count = () => {
  return this.model.scan().count().exec();
}

module.exports.find = () => {
  return this.model.scan().exec();
}

module.exports.delete = (id) => {
  return this.model.delete(id);
}
