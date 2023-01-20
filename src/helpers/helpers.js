const response = ({res, status = 'Success', statusCode = 200, message = 'All data successfully loaded', data = {}}) => {
  res.status(statusCode).json({
    status,
    statusCode,
    message,
    data,
  });
};

const responsePagination = (res, status, statusCode, message, data, pagination) => {
  res.status(statusCode).json({
    status,
    statusCode,
    message,
    data,
    pagination,
  });
};

const responseError = ({res, status = 'Error', statusCode = 500, message = 'Internal Server Error', error = {}}) => {
  res.status(statusCode).json({
    status,
    statusCode,
    message,
    error,
  });
};

const promiseResolveReject = (resolve, reject, error, result) => {
  if (!error) {
    resolve(result);
  } else {
    reject(error);
  }
};

module.exports = {
  response,
  responseError,
  promiseResolveReject,
  responsePagination,
};
