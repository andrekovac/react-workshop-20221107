import { useState, useEffect } from "react";

interface BookI {
  title?: string | null;
  subtitle?: string | null;
  numPages?: number | null;
}

const useBook = (isbn: string) => {
  const [book, setBook] = useState<BookI>({
    title: null,
    subtitle: null,
    numPages: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const book = await response.json();
      setBook(book);
    };

    fetchData();
  }, [isbn]);

  return book;
};

export default useBook;
