import { v4 as uuidv4 } from 'uuid';

// action types
const LOAD_BOOKS = 'bookstore/books/LOAD_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// actions
export const loadBooks = () => ({ type: LOAD_BOOKS });
export const addBook = (book) => ({ type: ADD_BOOK, book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

// reducer
const intialState = [
  { id: uuidv4(), title: 'book1', author: 'author1' },
  { id: uuidv4(), title: 'book2', author: 'author2' },
  { id: uuidv4(), title: 'book3', author: 'author3' },
  { id: uuidv4(), title: 'book4', author: 'author4' },
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
        books: [...state.books.filter((book) => book.id !== action.id)],
      };
    default:
      return state;
  }
}
