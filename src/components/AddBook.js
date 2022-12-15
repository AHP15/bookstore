import { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import {
  addBook,
  addBookError,
  reqAddBook,
  clearError,
} from '../redux/books/books';
import styles from '../styles/AddBook.module.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('action');

  const dispatch = useDispatch();
  const { adding } = useSelector((state) => state.books, shallowEqual);

  const sendBook = async () => {
    dispatch(reqAddBook());
    try {
      const book = {
        item_id: uuidv4(),
        title,
        author,
        category,
      };
      const res = await fetch(process.env.REACT_APP_BOOKS, {
        method: 'POST',
        body: JSON.stringify(book),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 201) {
        dispatch(addBook(book));
      }
    } catch (err) {
      dispatch(addBookError(err.message));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      dispatch(addBookError('Please add a book title'));
      setTimeout(() => dispatch(clearError()), 2000);
      return;
    }

    if (!author.trim()) {
      dispatch(addBookError('Please add a book author'));
      setTimeout(() => dispatch(clearError()), 2000);
      return;
    }

    await sendBook();

    setTitle('');
    setAuthor('');
  };

  return (
    <div className={styles.add_book}>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          name="author"
          type="text"
          placeholder="author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="action">Action</option>
          <option value="programming">Porgramming</option>
          <option value="math">Math</option>
        </select>
        <button type="submit">{adding ? 'adding...' : 'Add Book'}</button>
      </form>
    </div>
  );
};
export default AddBook;
