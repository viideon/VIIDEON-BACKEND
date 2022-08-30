const SSM = require('aws-sdk/clients/ssm');
const SSMParameterStore = require('ssm-parameter-store');

const parameters = new SSMParameterStore(new SSM(), {
  SENDGRID_API_KEY: '/viideon/sendgrid/apiKey'
});

module.exports.getConfig = async () => {
  await parameters.preload();
  return parameters;
}