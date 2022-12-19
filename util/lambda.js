const Lambda = require('aws-sdk/clients/lambda');

module.exports.invoke = (functionArn, data) => {
  const lambda = new Lambda({
    apiVersion: '2015-03-31',
  });

  const params = {
    FunctionName: functionArn,
    Payload: JSON.stringify(data),
  }

  console.log('Executing lambda function', { params }, 'app.util.lambda.invoke');

  return new Promise((resolve, reject) => {
    lambda.invoke(params, function(err, data) {
      if (err) {
        return reject(err);
      }
      console.log('Lambda success', { data }, 'app.util.lambda.invoke');
      return resolve(data);
    });
  });
}
