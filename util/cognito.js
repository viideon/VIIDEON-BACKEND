const {CognitoUserPool} = require('amazon-cognito-identity-js');

module.exports.signUp = (username, email, firstName, lastName, password) => {
  return new Promise((resolve, reject) => {
    const poolData = {
      UserPoolId: process.env.COGNITO_USER_POOL_ID, // Your user pool id here
      ClientId: process.env.COGNITO_CLIENT_ID, // Your client id here
    };
    const userPool = new CognitoUserPool(poolData);

    const dataEmail = {
      Name: 'email',
      Value: email,
    };
    const dataFirstName = {
      Name: 'given_name',
      Value: firstName,
    };
    const dataLastName = {
      Name: 'family_name',
      Value: lastName,
    };
    userPool.signUp(username, password, [dataEmail, dataFirstName, dataLastName], null, ((err, result) => {
      if (err) {
        return reject(err);
      }

      resolve(result.user);
    }));
  });
}