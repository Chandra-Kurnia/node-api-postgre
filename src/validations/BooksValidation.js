const {param, body} = require('express-validator');
const {validate} = require('uuid');
const {getBook} = require('../models/Books_model');
const dataPublisher = require('../data/publisher.json');

const getBookValidation = () => [
  param('id')
    .notEmpty()
    .withMessage('Must include book id !')
    .bail()
    .custom((val) => {
      // console.log(validate(val))
      if (!validate(val)) {
        throw new Error('Book id must uuid !');
      }
      return true;
    }),
];

const getBookByPublisherValidation = () => [
  body('id')
    .notEmpty()
    .withMessage('Must include publisher id !')
    .bail()
    .custom((val) => {
      const availablePublisher = dataPublisher.find((e) => e.publisher_id === val);
      if (!availablePublisher) {
        throw new Error('Invalid publisher, please check valid publisher in /getAllPublisher');
      }
      return true;
    }),
];

const deleteBookValidation = () => [
  param('id')
    .notEmpty()
    .withMessage('Must include book id !')
    .bail()
    .custom((val) => {
      // console.log(validate(val))
      if (!validate(val)) {
        throw new Error('Book id must uuid !');
      }
      return true;
    })
    .bail()
    .custom(async (val) => {
      const data = await getBook(val);
      if (data.rows.length === 0) {
        throw new Error('The data you want to delete is not found');
      }
      return true;
    }),
];

const insertBookValidation = () => [
  body('tittle').notEmpty().withMessage('Title cannot be empty!'),
  body('author_name').notEmpty().withMessage('Author cannot be empty!'),
  body('publisher_id')
    .notEmpty()
    .withMessage('Publisher cannot be empty!')
    .bail()
    .custom((val) => {
      const availablePublisher = dataPublisher.find((e) => e.publisher_id === val);
      if (!availablePublisher) {
        throw new Error('Invalid publisher, please check valid publisher in /getAllPublisher');
      }
      return true;
    }),
  body('total_page')
    .notEmpty()
    .withMessage('Total pages cannot be empty!')
    .bail()
    .isNumeric()
    .withMessage('Page totals must be numbers!')
    .bail()
    .custom((val) => {
      if (val <= 0) {
        throw new Error('The number of book pages must be greater than 0!');
      }
      return true;
    }),
  body('description').notEmpty().withMessage('Description cannot be empty!'),
];

const updateBookValidation = () => [
  body('id')
    .notEmpty()
    .withMessage('Must include book id !')
    .bail()
    .custom((val) => {
      // console.log(validate(val))
      if (!validate(val)) {
        throw new Error('Book id must uuid !');
      }
      return true;
    }),
  body('tittle').notEmpty().withMessage('Title cannot be empty!'),
  body('author_name').notEmpty().withMessage('Author cannot be empty!'),
  body('publisher_id')
    .notEmpty()
    .withMessage('Publisher cannot be empty!')
    .bail()
    .custom((val) => {
      const availablePublisher = dataPublisher.find((e) => e.publisher_id === val);
      if (!availablePublisher) {
        throw new Error('Invalid publisher, please check valid publisher in /getAllPublisher');
      }
      return true;
    }),
  body('total_page')
    .notEmpty()
    .withMessage('Total pages cannot be empty!')
    .bail()
    .isNumeric()
    .withMessage('Page totals must be numbers!')
    .bail()
    .custom((val) => {
      if (val <= 0) {
        throw new Error('The number of book pages must be greater than 0!');
      }
      return true;
    }),
  body('description').notEmpty().withMessage('Description cannot be empty!'),
];

module.exports = {
  getBookValidation,
  insertBookValidation,
  updateBookValidation,
  deleteBookValidation,
  getBookByPublisherValidation,
};
