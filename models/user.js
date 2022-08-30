const dynamoose = require("dynamoose");
const randomstring = require("randomstring");
const { v4: uuid } = require('uuid');

const tokenModel = require("./token");

const schema = new dynamoose.Schema({
  _id: { type: String, required: true, hashKey: true },
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

module.exports.model = dynamoose.model(process.env.USER_TABLE_NAME, schema, {create: false});

module.exports.create = (data) => {
  data._id = uuid();
  return this.model.create(data);
}

module.exports.generateVerificationToken = (_user) => {
  let payload = {
    userId: _user._id,
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
    this.model.query('email').eq(email).using('gidx-email').all().exec((err, response) => {
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
    console.log('findByNameAndEmail', email, name);
    this.model.scan('email').eq(email).or().where('userName').eq(name).all().exec((err, response) => {
      console.log('Query executed', err, response);
      if (err) {
        return reject(err);
      }

      if (response.length === 0) {
        return resolve(null);
      }

      return resolve(response);
    });
  });
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
