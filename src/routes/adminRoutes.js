const express = require('express');
const { MongoClient } = require('mongodb');

const debug = require('debug')('app:adminRoutes');

const adminRouter = express.Router();
const books = [
  {
    title: 'blade runner',
    genre: 'sci fi',
    author: 'phil dick',
    bookId: 54,
    read: false
  },
  {
    title: 'harry potter',
    genre: 'childrens',
    author: 'jr rowling',
    bookId: 24280,
    read: true
  },
  {
    title: 'lord of teh rings',
    genre: 'fantasy',
    author: 'tolken',
    read: false
  }
];

function router(nav) {
  adminRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';

      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          const db = client.db(dbName);
          const response = await db.collection('books').insertMany(books);
          res.json(response);
        } catch (err) {
          debug(err.stack);
        }
        client.close();
      }());
    });
  return adminRouter;
}

module.exports = router;
