import React, { useState, useEffect, useCallback, useMemo } from "react";

interface BookI {
  title?: string | null;
  subtitle?: string | null;
  numPages?: number | null;
}

type BookDetailProps = {
  isbn: string;
};

const BookDetail: React.FC<BookDetailProps> = ({ isbn }) => {
  const [book, setBook] = useState<BookI>({
    title: null,
    subtitle: null,
    numPages: null,
  });

  const fetchData = useCallback(async () => {
    const response = await fetch(`http://localhost:4730/books/${isbn}`);
    const book = await response.json();
    setBook(book);
  }, [isbn]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  /**
   * first argument of `useMemo` is called every time `isbn` changes
   */
  const meinWert = useMemo(() => {
    console.log("mein Wert memoized");
    return "mein gespeichterter wert = " + isbn;
  }, [isbn]);

  useEffect(() => {
    setTimeout(() => {
      console.log("setTimeout", meinWert);
      console.log("setTimeout", meinWert);
      console.log("setTimeout", meinWert);
      console.log("setTimeout", meinWert);
      console.log("setTimeout", meinWert);
    }, 2000);
  }, [meinWert]);

  return (
    <>
      <div>Title: {book.title}</div>
      <div>SubTitle: {book.subtitle}</div>
      <div>Pages: {book.numPages}</div>
    </>
  );
};

export default BookDetail;
