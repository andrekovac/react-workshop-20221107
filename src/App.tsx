import React from "react";
import "./App.css";
import BookDetail from "./components/BookDetail";
import BookList from "./components/BookList";
import Counter from "./components/Counter";
import SimpleN from "./components/SimpleName";

const App = () => {
  const [text, setText] = React.useState("Zeige das hier an.");
  const [showCounter, setShowCounter] = React.useState(true);

  const handleClick = () => {
    setText("Neuer text");
    console.log("handleClick", { text });
  };

  React.useEffect(() => {
    console.log("[App component] text effect");
  }, [text]);

  React.useEffect(() => {
    console.log("[App component] showCounter effect");
  }, [showCounter]);

  console.log("render App");

  return (
    <div className="App">
      <SimpleN>{"Sofia"}</SimpleN>
      <SimpleN />
      <p>Text: {text}</p>
      <button onClick={() => handleClick()}>Hier klicken</button>
      <button onClick={() => setShowCounter(false)}>Counter ausblenden</button>
      <div style={{ padding: 10 }}>{showCounter ? <Counter /> : null}</div>
      <BookList />
      <BookDetail />
    </div>
  );
};

export default App;
