const dynamoose = require("dynamoose");
const { v4: uuid } = require('uuid');

const user = require('./user');

const schema = new dynamoose.Schema({
  _id: {
    type: String,
    required: true,
    hashKey: true,
    default: uuid(),
  },
  url: {
    type: String,
    unique: true,
    required: true,
    index: {
      name: 'gidx-url',
      global: true,
    },
  },
  thumbnail: {
    type: String,
    required: false,
    index: {
      name: 'gidx-thumbnail',
      global: true,
    },
  },
  title: {
    type: String,
    required: false,
    index: {
      name: 'gidx-title',
      global: true,
    },
  },
  userId: {
    type: user.schema,
    index: [
      {
        name: 'gidx-userId',
        global: true,
      },
      {
        name: 'gidx-userId-isVideo',
        rangeKey: 'isVideo',
        global: true,
      },
      {
        name: 'gidx-userId-campaign',
        rangeKey: 'campaign',
        global: true,
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
  views: { type: Number },
  watch: { type: Number },
  emailShareCount: { type: Number },
  emailOpens: { type: Number },
  ctaClicks: { type: Number },
  logoProps: {
    url: { type: String },
    width: { type: String },
    height: { type: String },
    position: { type: String }
  },
  textProps: {
    text: { type: String },
    align: { type: String },
    vAlign: { type: String },
    textColor: { type: String },
    fontSize: { type: String },
    reveal: [],
    fontWeight: { type: Boolean },
    textDecoration: { type: Boolean },
    fontStyle: { type: Boolean },
  },
  musicProps: {
    url: { type: String },
    title: { type: String },
    musicVolume: { type: Number }
  },
  description: { type: String },
  eMailTemplate: { type: String }
});

module.exports.model = dynamoose.model(process.env.VIDEOS_TABLE_NAME, schema);

module.exports.save = data => {
  return this.model.save(data);
}

module.exports.update = (id, data) => {
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
  return this.model.get(_id);
}

module.exports.countVideos = (userId) => {
  return this.model.query('userId').eq(userId).where('isVideo').eq(true).using('gidx-userId-isVideo').all().count().exec();
}

module.exports.countCampaignVideos = (userId) => {
  return this.model.query('userId').eq(userId).where('campaign').eq(true).using('gidx-userId-campaign').all().count().exec();
}

