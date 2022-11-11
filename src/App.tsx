import { useState } from "react";
import "./App.css";
import BookDetail from "./components/BookDetail";
import Playground from "./components/Playground";

const App = () => {
  const [isbn, setIsbn] = useState("9781449372620");

  return (
    <div className="App">
      <Playground />
      <BookDetail isbn={isbn} onChangeIsbn={(newIsbn) => setIsbn(newIsbn)} />
    </div>
  );
};

export default App;
