import { useSelector, shallowEqual } from 'react-redux';
import NavBar from './NavBar';
import Book from './Book';
import AddBook from './AddBook';

const BookList = () => {
  const books = useSelector((state) => state.bookReducer.books, shallowEqual);
  return (
    <div>
      <NavBar />
      <div>
        {books.map(({ title, author }) => (<Book key={title} title={title} author={author} />))}
      </div>
      <AddBook />
    </div>
  );
};

export default BookList;
