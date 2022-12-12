// action types
const LOAD_BOOKS = 'load';
const ADD_BOOK = 'add-book';
const REMOVE_BOOK = 'remove-book';

// actions
export const loadBooks = () => ({ type: LOAD_BOOKS });
export const addBook = (book) => ({ type: ADD_BOOK, book });
export const removeBook = (title) => ({ type: REMOVE_BOOK, title });

// reducer
export default function reducer(state = [], action) {
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
        books: state.books.filter((book) => book.title !== action.title),
      };
    default:
      return state;
  }
}
