const express = require('express');

const bookRouter = express.Router();

function router(nav) {
  const books = [
    {
      title: 'blade runner',
      genre: 'sci fi',
      author: 'phil dick',
      read: false
    },
    {
      title: 'harry potter',
      genre: 'childrens',
      author: 'jr rowling',
      read: true
    },
    {
      title: 'lord of teh rings',
      genre: 'fantasy',
      author: 'tolken',
      read: false
    }
  ];

  bookRouter.route('/')
    .get((req, res) => {
      res.render(
        'bookListView',
        {
          title: 'library',
          nav,
          books
        }
      );
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render(
        'bookView',
        {
          title: 'library',
          nav,
          book: books[id]
        }
      );
    });
  return bookRouter;
}

module.exports = router;
