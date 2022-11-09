import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import SimpleN from "./components/SimpleName";

const App = () => {
  const [text, setText] = React.useState("Zeige das hier an.");

  const handleClick = () => {
    setText("Neuer text");
    console.log("handleClick", { text });
  };

  console.log("render App");

  return (
    <div className="App">
      <SimpleN>{"Sofia"}</SimpleN>
      <SimpleN />
      <p>Text: {text}</p>
      <button onClick={() => handleClick()}>Hier klicken</button>
      <div style={{ padding: 10 }}>
        <Counter />
      </div>
    </div>
  );
};

export default App;
