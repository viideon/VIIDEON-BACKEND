const HTTPStatus = require('http-status');

const AppError = require('../error/AppError');
const RequestValidationError = require('../error/RequestValidationError');

const OK_STATUS = HTTPStatus.OK;
const CREATED_STATUS = HTTPStatus.CREATED;
const BAD_REQUEST_STATUS = HTTPStatus.BAD_REQUEST;
const BAD_REQUEST_CODE = 'BAD_REQUEST';
const BAD_REQUEST_MESSAGE = 'There was a problem with the request';
const UNAUTHORIZED_STATUS = HTTPStatus.UNAUTHORIZED;
const UNAUTHORIZED_CODE = 'UNAUTHORIZED';
const UNAUTHORIZED_MESSAGE = 'You are not authorized to make this request.';
const NOT_FOUND_STATUS = HTTPStatus.NOT_FOUND;
const NOT_FOUND_CODE = 'NOT_FOUND';
const NOT_FOUND_MESSAGE = 'The resource was not found';
const SERVICE_UNAVAILABLE_STATUS = HTTPStatus.SERVICE_UNAVAILABLE;
const SERVICE_UNAVAILABLE_CODE = 'SERVICE_UNAVAILABLE';
const SERVICE_UNAVAILABLE_MESSAGE = 'The service is currently unavailable. Please try again later.';
const UNHANDLED_ERROR_STATUS = HTTPStatus.INTERNAL_SERVER_ERROR;
const UNHANDLED_ERROR_CODE = 'UNHANDLED_ERROR';
const UNHANDLED_ERROR_MESSAGE = 'An unexpected error ocurred. Please try your request again later.';
const INVALID_INPUT_CODE = 'INVALID_INPUT';
const INVALID_INPUT_MESSAGE = 'There was an error with one or more input values.';
const USER_EXISTS_CODE = 'USER_EXISTS';
const USER_EXISTS_MESSAGE = 'The user already exists in the system.';
const USER_EXISTS_STATUS = HTTPStatus.CONFLICT;
const CONFLICT_STATUS = HTTPStatus.CONFLICT;
const CONFLICT_CODE = 'CONFLICT';
const CONFLICT_MESSAGE = 'A duplicate request was processed';

const success = (statusCode, response, requestId) => {
  if (!requestId) {
    return {
      statusCode,
      responseBody: response,
    }
  }

  return {
    statusCode,
    responseBody: {
      response,
      requestId
    }
  }
}

const getError = (err) => {
  let code = err.code;
  if (err.body) {
    code = err.body.code;
  }
  else if (err.name) {
    code = err.name;
  }
  else if (err.response) {
    code = err.response.statusText;
  }

  let statusCode = '';
  let errorCode = '';
  let errorMessage = '';
  switch (code) {
    case 'BadRequest':
    case 'ValidationError':
      errorCode = BAD_REQUEST_CODE;
      errorMessage = BAD_REQUEST_MESSAGE;
      statusCode = BAD_REQUEST_STATUS;
      break;
    case 'InvalidParameterException':
    case 'InvalidPasswordException':
    case 'MissingRequiredParameter':
    case 'ValidationException':
      errorCode = INVALID_INPUT_CODE;
      errorMessage = INVALID_INPUT_MESSAGE;
      statusCode = BAD_REQUEST_STATUS;
      break;
    case 'InvalidCredentials':
    case 'InvalidAccessToken':
    case 'ExpiredAccessToken':
    case 'InvalidAccountStatus':
    case 'InvalidApplicationStatus':
    case 'InvalidScopes':
    case 'Forbidden':
    case 'InvalidResourceState':
    case 'NotAuthorizedException':
    case 'UserNotFoundException':
    case 'UserNotConfirmedException':
      errorCode = UNAUTHORIZED_CODE;
      errorMessage = UNAUTHORIZED_MESSAGE;
      statusCode = UNAUTHORIZED_STATUS;
      break;
    case 'UsernameExistsException':
      errorCode = USER_EXISTS_CODE;
      errorMessage = USER_EXISTS_MESSAGE;
      statusCode = USER_EXISTS_STATUS;
      break;
    case 'NotFound':
    case 'NOT_FOUND':
    case 'ResourceNotFoundException':
      errorCode = NOT_FOUND_CODE;
      errorMessage = NOT_FOUND_MESSAGE;
      statusCode = NOT_FOUND_STATUS;
      break;
    case 'ItemCollectionSizeLimitExceededException':
    case 'ProvisionedThroughputExceededException':
    case 'MethodNotAllowed':
    case 'InvalidVersion':
    case 'ServerError':
    case 'RequestTimeout':
    case 'AccessDeniedException':
      errorCode = SERVICE_UNAVAILABLE_CODE;
      errorMessage = SERVICE_UNAVAILABLE_MESSAGE;
      statusCode = SERVICE_UNAVAILABLE_STATUS;
      break;
    case 'ConditionalCheckFailedException':
    case 'DuplicateResource':
      errorCode = CONFLICT_CODE;
      errorMessage = CONFLICT_MESSAGE;
      statusCode = CONFLICT_STATUS;
      break;
    default:
      errorCode = UNHANDLED_ERROR_CODE;
      errorMessage = UNHANDLED_ERROR_MESSAGE;
      statusCode = UNHANDLED_ERROR_STATUS;
  }

  if (err.fields) {
    return new RequestValidationError(err.fields);
  }
  return new AppError(err.message || errorMessage, errorCode, statusCode);
}

module.exports = {
  success,
  getError,
  OK_STATUS,
  CREATED_STATUS
};
