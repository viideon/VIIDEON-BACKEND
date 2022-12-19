const S3 = require('aws-sdk/clients/s3');
const _ = require('lodash');

module.exports.getSignedUrl = (bucket, key, operation, contentType = 'application/octet-stream', storageClass = 'STANDARD', encryption = 'AES256') => {
  const s3 = new S3();

  const params = {
    Bucket: bucket,
    Key: key,
    Expires: 60 * 5, // 5 minutes
  }

  if (operation === 'putObject') {
    params.StorageClass = storageClass;
    params.ServerSideEncryption = encryption;
    params.ContentType = contentType;
  }

  console.log('Creating signed url', {params});

  return new Promise((resolve, reject) => {
    if (_.isEmpty(key) || _.isNil(key)) {
      console.log('Key is empty, returning');
      return resolve('');
    }
    s3.getSignedUrl(operation, params, function(err, data) {
      if (err) {
        console.error('Error creating url', err);
        return reject(err);
      }
      console.log('URL created', data);
      return resolve({
        signedRequest: data,
        url: `https://${bucket}/s3.amazonaws.com/${key}`,
        key,
      });
    });
  });
}

module.exports.getRawFromS3 = (bucket, key) => {
  let s3 = new S3();

  const params = {
    Bucket: bucket,
    Key: key,
  }

  return s3.getObject(params);
}

module.exports.sendToS3 = (body, bucket, key, contentType = 'application/octet-stream', storageClass = 'STANDARD', encryption = 'AES256', tagging = '') => {
  let s3 = new S3();

  const params = {
    Body: body,
    Bucket: bucket,
    ContentType: contentType,
    ServerSideEncryption: encryption,
    StorageClass: storageClass,
    Key: key,
    Tagging: tagging,
  }

  if (process.env.IS_OFFLINE) {
    return new Promise(resolve => {
      resolve({
        Location: 'https://some.url',
        ETag: 'etag',
        Bucket: bucket,
        Key: key,
      });
    });
  }

  return new Promise((resolve, reject) => {
    s3.upload(params, function(err, data) {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}
