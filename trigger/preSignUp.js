// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

// Modified from https://github.com/aws-samples/amazon-cognito-passwordless-email-auth/blob/master/cognito/lambda-triggers/pre-sign-up/pre-sign-up.ts

module.exports.handler = async (event) => {
  event.response.autoConfirmUser = true;

  console.log('exiting preSignUp', event.response);

  return event;
};
