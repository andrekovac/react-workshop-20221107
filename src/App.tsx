import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import BookDetail from "./components/BookDetail";
import Counter from "./components/Counter";
import BookScreen from "./screens/book";
import Books from "./screens/Books";
import Playground from "./screens/Playground";

const App = () => {
  const [isbn, setIsbn] = useState("9781449372620");

  return (
    <div className="App">
      <nav>
        <div style={{ padding: 10 }}>
          <Link to="/playground">Playground</Link>
          {` | `}
          <Link to="/book">Book</Link>
          {` | `}
          <Link to="/books">Books</Link>
          {` | `}
          <Link to="/counter">Counter</Link>
        </div>
      </nav>

      <main>
        <Switch>
          <Route exact path="/">
            {<h1>Main</h1>}
          </Route>
          <Route path="/books/detail">
            <BookDetail
              isbn={isbn}
              onChangeIsbn={(newIsbn) => setIsbn(newIsbn)}
            />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/book/:isbn">
            <BookScreen />
          </Route>
          <Route path="/counter/:nr">
            <Counter />
          </Route>
          <Route path="/playground">
            <Playground />
          </Route>
          <Route>
            <h2>404 Error!!</h2>
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
