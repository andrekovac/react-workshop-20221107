import React, { Fragment } from "react";
import BookListItem from "./BookListItem";

interface Book {
  id: number;
  title: string;
  price?: number;
}

const defaultBooks: Array<Book> = [
  { id: 1, title: "A first Book" },
  { id: 2, title: "Another awesome Book" },
  { id: 3, title: "Learn React - the full book" },
];

type BookListProps = {
  books?: Book[];
};

export const BookList: React.FC<BookListProps> = ({ books = defaultBooks }) => {
  return (
    <Fragment>
      <h1>My list of Books</h1>
      <ul>
        {books.map((book) => {
          return <BookListItem key={book.id} title={book.title}></BookListItem>;
        })}
      </ul>
    </Fragment>
  );
};

export default BookList;
