import { Link, Route, useRouteMatch } from "react-router-dom";
import Book from "./Book";
import EditBook from "./EditBook";

type BookParams = { isbn: string };

const BookScreen = () => {
  const { path, url } = useRouteMatch<BookParams>();

  console.log({ path, url });

  return (
    <>
      <Route exact path={path}>
        <Book />
        <Link to={`${url}/edit`}>Edit book</Link>
      </Route>
      <Route exact path={`${path}/edit`}>
        <EditBook />
      </Route>
    </>
  );
};

export default BookScreen;
