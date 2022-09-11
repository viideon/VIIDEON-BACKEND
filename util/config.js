const SSM = require('aws-sdk/clients/ssm');
const SSMParameterStore = require('ssm-parameter-store');

const parameters = new SSMParameterStore(new SSM(), {
  SENDGRID_API_KEY: `/${process.env.ENVIRONMENT}/viideon/sendgrid/apiKey`,
  APP_DOMAIN: `/${process.env.ENVIRONMENT}/viideon/appDomain`
});

module.exports.getConfig = async () => {
  await parameters.preload();
  return parameters;
}