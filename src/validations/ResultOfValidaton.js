const { validationResult } = require('express-validator');
const { responseError } = require('../helpers/helpers');

const resultOfValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return responseError({res,status: 'Error',statusCode: 422, message: 'Invalid Input',error: errors.errors});
  }
  next();
};

module.exports = resultOfValidation;