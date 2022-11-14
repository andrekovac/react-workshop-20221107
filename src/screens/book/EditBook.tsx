import { useParams } from "react-router-dom";

type BookParams = { isbn: string };

const EditBook = () => {
  const { isbn } = useParams<BookParams>();
  return <p>Edit a single book: {isbn}</p>;
};

export default EditBook;
