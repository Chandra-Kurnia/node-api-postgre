const {responseError, response} = require('../helpers/helpers');
const {
  browseBooks,
  getBook,
  insertBook,
  updateBook,
  deleteBook,
  getBooksByPublisher,
} = require('../models/Books_model');
const dataPublisher = require('../data/publisher.json');

const browseBooksController = async (req, res) => {
  try {
    const result = await browseBooks();
    let data = [];
    result.rows.map((rowData) => {
      let dataObject = {};
      dataObject = {
        ...rowData,
        publisher: dataPublisher.find((e) => e.publisher_id === rowData.publisher_id),
      };
      delete dataObject.publisher_id;
      data.push(dataObject);
    });
    response({
      res,
      message: result.rows.length === 0 ? 'No Data Found' : undefined,
      data,
    });
  } catch (err) {
    responseError({
      res,
      error: err,
    });
  }
};

const getBooksController = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await getBook(id);
    const data = {
      ...result.rows[0],
      publisher: dataPublisher.find((e) => e.publisher_id === result.rows[0].publisher_id),
    };
    delete data.publisher_id;
    response({
      res,
      message: result.rows.length === 0 ? 'No Data Found' : undefined,
      data,
    });
  } catch (err) {
    responseError({
      res,
      error: err,
    });
  }
};

const insertBookController = async (req, res) => {
  try {
    const result = await insertBook(req.body);
    response({
      res,
      message: 'Successfully inserted the book',
      statusCode: 200,
      data: result,
    });
  } catch (err) {
    responseError({
      res,
      error: err,
    });
  }
};

const updateBookController = async (req, res) => {
  try {
    const result = await updateBook(req.body);
    response({
      res,
      message: 'Successfully updated the book',
      statusCode: 200,
      data: result,
    });
  } catch (err) {
    responseError({
      res,
      error: err,
    });
  }
};

const deleteBookController = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await deleteBook(id);
    response({
      res,
      message: 'Successfully deleted the book',
      statusCode: 200,
      data: result,
    });
  } catch (err) {
    responseError({
      res,
      error: err,
    });
  }
};

const getAllPublisherController = async (req, res) => {
  try {
    // const {data} = await axios.get(`${process.env.INDONESIA_PUBLIC_STATIC_API}/api/publishers`);
    // const {data} = await axios.get('../data/publisher.json');
    // console.log(dataPublisher[0])
    response({
      res,
      message: 'All data successfully loaded',
      statusCode: 200,
      data: dataPublisher,
    });
  } catch (err) {
    responseError({
      res,
      error: err,
    });
  }
};

const getBooksByPublisherController = async (req, res) => {
  try {
    const {id} = req.body
    const result = await getBooksByPublisher(id);
    const publisher = dataPublisher.find((e) => e.publisher_id === id);
    const data = {
        ...publisher,
        books: result.rows
    }
    response({
        res,
        message: result.rows.length === 0 ? 'Books not found' : undefined,
        data,
      });
  } catch (err) {
    responseError({
      res,
      error: err,
    });
  }
};

module.exports = {
  browseBooksController,
  getBooksController,
  insertBookController,
  updateBookController,
  deleteBookController,
  getAllPublisherController,
  getBooksByPublisherController,
};
