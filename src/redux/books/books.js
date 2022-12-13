// action types
const LOAD_BOOKS = 'bookstore/books/LOAD_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// actions
export const loadBooks = () => ({ type: LOAD_BOOKS });
export const addBook = (book) => ({ type: ADD_BOOK, book });
export const removeBook = (title) => ({ type: REMOVE_BOOK, title });

// reducer
const intialState = [
  { title: 'book1', author: 'author1' },
  { title: 'book2', author: 'author2' },
  { title: 'book3', author: 'author3' },
  { title: 'book4', author: 'author4' },
];
export default function reducer(state = { load: false, books: intialState }, action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        load: true,
        books: [],
      };
    case ADD_BOOK:
      return {
        load: false,
        books: [...state.books, action.book],
      };
    case REMOVE_BOOK:
      return {
        load: false,
        books: [...state.books.filter((book) => book.title !== action.title)],
      };
    default:
      return state;
  }
}
