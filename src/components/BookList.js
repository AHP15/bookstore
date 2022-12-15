import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import NavBar from './NavBar';
import Book from './Book';
import AddBook from './AddBook';
import { setBooks, setBooksError, getBooks } from '../redux/books/books';
import styles from '../styles/BookList.module.css';

const BookList = () => {
  const { books, load, error } = useSelector((state) => state.books, shallowEqual);
  const dispatch = useDispatch();

  const fetchBooks = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const booksData = Object.entries(data).map(([k, v]) => ({ id: k, ...v[0] }));
      return booksData;
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    dispatch(getBooks());
    fetchBooks(process.env.REACT_APP_BOOKS)
      .then((data) => dispatch(setBooks(data)))
      .catch((err) => dispatch(setBooksError(err.message)));
  }, []);

  return (
    <div className="container">
      <NavBar />
      <div className={styles.list}>
        {load ? 'loading...' : ''}
        {books.map(({
          id,
          title,
          author,
          // eslint-disable-next-line comma-dangle
          category
        }) => (
          <Book
            key={id}
            id={id}
            title={title}
            author={author}
            category={category}
            progress={50}
          />
        ))}
      </div>
      <AddBook />
      {error ? (
        <p className={styles.error}>
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default BookList;
