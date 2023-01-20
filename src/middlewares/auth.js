const {responseError} = require('../helpers/response');
const Jwt = require('jsonwebtoken');

const Auth = (req, res, next) => {
  try {
    const token = req.body.token;
    if (!token) {
      return responseError(res, 'Authorized failed', 401, 'Server need accessToken', []);
    }
    Jwt.verify(token.accessToken, process.env.ACCESS_TOKEN_SECRET_KEY, (err, decode) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return responseError(res, 'Authorized failed', 401, 'token expired', []);
        }
        if (err.name === 'JsonWebTokenError') {
          return responseError(res, 'Authorized failed', 401, 'token invalid', []);
        }
        return responseError(res, 'Authorized failed', 401, 'token not active', []);
      }
      req.userLogin = decode;
      next();
    });
  } catch (error) {
    next(error);
  }
};

module.exports = Auth;
