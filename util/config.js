const SSM = require('aws-sdk/clients/ssm');
const SSMParameterStore = require('ssm-parameter-store');

const parameters = new SSMParameterStore(new SSM(), {
  SENDGRID_API_KEY: `/${process.env.ENVIRONMENT}/viideon/sendgrid/apiKey`,
  APP_DOMAIN: `/${process.env.ENVIRONMENT}/viideon/appDomain`,
  CLIENT_ID: `/${process.env.ENVIRONMENT}/viideon/gmail/clientId`,
  CLIENT_SECRET: `/${process.env.ENVIRONMENT}/viideon/gmail/clientSecret`,
  TOKEN_OBJECT_PATH: `/${process.env.ENVIRONMENT}/viideon/gmail/tokenObjectPath`,
  FROM_EMAIL: `/${process.env.ENVIRONMENT}/viideon/fromEmail`,
  SECRET_KEY: `/${process.env.ENVIRONMENT}/viideon/jwt/secretKey`,
});

module.exports.getConfig = async () => {
  await parameters.preload();
  return parameters;
}