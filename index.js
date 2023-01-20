/* eslint-disable no-unused-vars */
const Express = require('express');
require('dotenv').config();
const {PORT} = process.env;
const app = Express();
const routes = require('./src/routes/')
const { responseError } = require('./src/helpers/helpers');
const fileUpload = require('express-fileupload');
const swaggerUI = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json')

app.use(fileUpload())
app.use(Express.json())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use('', routes)

app.use('*', (req, res, next) => {
  next(new Error('Endpoint not found'))
});

app.use((err, req, res, next) => {
  responseError({res,status: 'Error',statusCode: 400, error: err.message})
})

app.listen(PORT, () => {
  console.log(`server is running in port ${PORT}`);
});
