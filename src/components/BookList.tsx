import React, { Fragment } from "react";
import BookListItem from "./BookListItem";

interface Book {
  id: number;
  title: string;
}

const books: Array<Book> = [
  { id: 1, title: "A first Book" },
  { id: 2, title: "Another awesome Book" },
  { id: 3, title: "Learn React - the full book" },
];

export const BookList: React.FC = () => {
  return (
    <Fragment>
      <h1>List of Books</h1>
      <ul>
        {books.map((book) => {
          return <BookListItem key={book.id} title={book.title}></BookListItem>;
        })}
      </ul>
    </Fragment>
  );
};

export default BookList;
