const dynamoose = require("dynamoose");
const { v4: uuid } = require('uuid');
const _ = require('lodash');

const userModel = require('./user');

const schema = new dynamoose.Schema({
  _id: {
    type: String,
    required: true,
    hashKey: true,
  },
  url: {
    type: String,
    unique: true,
    required: true,
    index: {
      name: 'gidx-url',
      type: 'global',
    },
  },
  thumbnail: {
    type: String,
    required: false,
    index: {
      name: 'gidx-thumbnail',
      type: 'global',
    },
  },
  title: {
    type: String,
    required: false,
    index: {
      name: 'gidx-title',
      type: 'global',
    },
  },
  userId: {
    type: userModel.model,
    index: [
      {
        name: 'gidx-userId',
        type: 'global',
      },
    ],
  },
  date: { type: Date, default: Date.now },
  recieverEmail: { type: String, required: false },
  campaign: { type: Boolean, required: false },
  isChatvid: { type: Boolean, required: false },
  isVideo: {
    type: Boolean,
    required: false,
  },
  recordingEdit: { type: Boolean, require: false },
  views: { type: Number, default: 0 },
  watch: { type: Number, default: 0 },
  emailShareCount: { type: Number, default: 0 },
  emailOpens: { type: Number, default: 0 },
  ctaClicks: { type: Number, default: 0 },
  logoProps: {
    type: Object,
    schema: {
      url: { type: [String, dynamoose.type.NULL] },
      width: { type: String },
      height: { type: String },
      position: { type: String }
    }
  },
  textProps: {
    type: Object,
    schema: {
      text: { type: String },
      align: { type: String },
      vAlign: { type: String },
      textColor: { type: String },
      fontSize: { type: Number },
      reveal: {type: Array, schema: [String]},
      fontWeight: { type: Boolean },
      textDecoration: { type: Boolean },
      fontStyle: { type: Boolean },
    }
  },
  musicProps: {
    type: Object,
    schema: {
      url: { type: String },
      title: { type: String },
      musicVolume: { type: Number }
    }
  },
  description: { type: String },
  eMailTemplate: { type: String }
});

module.exports.model = dynamoose.model(process.env.VIDEOS_TABLE_NAME, schema);

module.exports.create = data => {
  data._id = uuid();
  return this.model.create(data);
}

module.exports.update = (id, data) => {
  if (_.has(data, 'date')) {
    data.date = new Date(data.date);
  }
  delete data._id;
  return this.model.update(id, data);
}

module.exports.delete = id => {
  return this.model.delete(id);
}

module.exports.findByThumbnail = thumbnail => {
  return new Promise((resolve, reject) => {
    this.model.query('thumbnail').eq(thumbnail).using('gidx-thumbnail').all().exec((err, response) => {
      if (err) {
        return reject(err);
      }

      resolve(response);
    });
  });
}

module.exports.deleteByThumbnail = async thumbnail => {
  const _videos = await this.findByThumbnail(thumbnail);
  await Promise.all(_.map(_videos, _video => {
    this.delete(_video._id);
  }));
  return {};
}

module.exports.findByUserId = userId => {
  return this.model.query('userId').eq(userId).using('gidx-userId').all().exec();
}

module.exports.findByUserIdAndCampaign = (userId, campaign) => {
  return new Promise((resolve, reject) => {
    this.model.query('userId').eq(userId).where('campaign').eq(campaign).all().exec((err, response) => {
      if (err) {
        return reject(err);
      }

      resolve(response);
    });
  });
}

module.exports.findByUserIdAndTitle = (userId, campaign, search) => {
  return new Promise((resolve, reject) => {
    this.model
      .query('userId').eq(userId)
      .where('campaign').eq(campaign)
      .where('title').contains(search)
      .all()
      .exec((err, response) => {
        if (err) {
          return reject(err);
        }

        resolve(response);
      }
    );
  });
}

module.exports.find = () => {
  return new Promise((resolve, reject) => {
    this.model.scan().all().exec((err, response) => {
      if (err) {
        return reject(err);
      }

      resolve(response);
    });
  });
}

module.exports.findByUrl = url => {
  return new Promise((resolve, reject) => {
    this.model.query('url').eq(url).using('gidx-url').all().exec((err, response) => {
      if (err) {
        return reject(err);
      }

      resolve(response);
    });
  });
}

module.exports.get = _id => {
  return this.model.get({_id});
}

module.exports.countVideos = (userId) => {
  return this.model.query('userId').eq(userId).where('isVideo').eq(true).using('gidx-userId').all().count().exec();
}

module.exports.countCampaignVideos = (userId) => {
  return this.model.query('userId').eq(userId).where('campaign').eq(true).using('gidx-userId').all().count().exec();
}

