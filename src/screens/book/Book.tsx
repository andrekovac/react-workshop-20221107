import { useParams } from "react-router-dom";
import BookDetail from "../../components/BookDetail";

type BookParams = { isbn: string };

const Book = () => {
  const { isbn } = useParams<BookParams>();

  return <BookDetail isbn={isbn} />;
};

export default Book;
