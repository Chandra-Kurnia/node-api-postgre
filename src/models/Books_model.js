const connection = require('../configs/database');
const {promiseResolveReject} = require('../helpers/helpers');
const {v4} = require('uuid');

const browseBooks = () =>
  new Promise((resolve, reject) => {
    connection.query('select * from books b ', (err, result) => {
      promiseResolveReject(resolve, reject, err, result);
    });
  });

const getBook = (id) =>
  new Promise((resolve, reject) => {
    connection.query(`select * from books b where id = '${id}'`, (err, result) => {
      promiseResolveReject(resolve, reject, err, result);
    });
  });

const getBooksByPublisher = (id) =>
  new Promise((resolve, reject) => {
    connection.query(`select * from books b where publisher_id = '${id}'`, (err, result) => {
      promiseResolveReject(resolve, reject, err, result);
    });
  });

const insertBook = (data) =>
  new Promise((resolve, reject) => {
    const bookData = [];
    // eslint-disable-next-line no-unused-vars
    for (const [key, value] of Object.entries({
      id: v4(),
      ...data,
    })) {
      bookData.push(value);
    }
    connection.query(`insert into "books" values($1, $2, $3, $4, $5, $6)`, bookData, (err) =>
      promiseResolveReject(resolve, reject, err, data)
    );
  });

const updateBook = (data) =>
  new Promise((resolve, reject) => {
    let bookQuery = '';
    let bookId = '';
    // eslint-disable-next-line no-unused-vars
    for (const [key, value] of Object.entries(data)) {
      if (key === 'id') {
        bookId = value;
      } else {
        bookQuery = bookQuery.concat(`"${key}" = '${value}',`);
      }
    }
    connection.query(`update "books" set ${bookQuery.slice(0, -1)} where id = '${bookId}'`, (err) =>
      promiseResolveReject(resolve, reject, err, data)
    );
  });

const deleteBook = (id) =>
  new Promise((resolve, reject) => {
    connection.query(`delete from "books" where id = '${id}'`, (err) => {
      promiseResolveReject(resolve, reject, err, {id});
    });
  });

module.exports = {
  browseBooks,
  getBook,
  insertBook,
  updateBook,
  deleteBook,
  getBooksByPublisher
};
