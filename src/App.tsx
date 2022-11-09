import React from "react";
import "./App.css";
import SimpleN from "./components/SimpleName";

const App = () => {
  const [text, setText] = React.useState("Zeige das hier an.");

  const handleClick = () => {
    setText("Neuer text");
    console.log("handleClick", { text });
  };

  console.log("render");

  return (
    <div className="App">
      <SimpleN />
      <p>Text: {text}</p>
      <button onClick={() => handleClick()}>Hier klicken</button>
    </div>
  );
};

export default App;
