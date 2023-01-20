const express = require('express');
const {browseBooksController, getBooksController, insertBookController, updateBookController, deleteBookController, getAllPublisherController, getBooksByPublisherController} = require('../controllers/Books_Controller');
const {getBookValidation, deleteBookValidation, insertBookValidation, updateBookValidation, getBookByPublisherValidation} = require('../validations/BooksValidation');
const resultOfValidation = require('../validations/ResultOfValidaton');
const router = express.Router();

router
  .get('/browseBooks', browseBooksController)
  .get('/getBook/:id*', getBookValidation(), resultOfValidation, getBooksController)
  .post('/insertBook', insertBookValidation(), resultOfValidation, insertBookController)
  .put('/updateBook', updateBookValidation(), resultOfValidation, updateBookController)
  .delete('/deleteBook/:id*', deleteBookValidation(), resultOfValidation, deleteBookController)
  .get('/getAllPublisher', getAllPublisherController)
  .post('/getBookByPublisher', getBookByPublisherValidation(), resultOfValidation, getBooksByPublisherController)

module.exports = router;
