import React from "react";
import useBook from "../hooks/useBook";

type BookDetailProps = {
  isbn: string;
  onChangeIsbn: (isbn: string) => void;
};

const BookDetail: React.FC<BookDetailProps> = ({ isbn, onChangeIsbn }) => {
  const book = useBook(isbn);

  return (
    <>
      <button onClick={() => onChangeIsbn("2392183922")}>Change ISBN</button>
      <div>Title: {book.title}</div>
      <div>SubTitle: {book.subtitle}</div>
      <div>Pages: {book.numPages}</div>
    </>
  );
};

export default BookDetail;
