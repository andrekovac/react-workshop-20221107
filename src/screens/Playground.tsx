import React from "react";
import BookList from "../components/BookList";
import Counter from "../components/Counter";
import SimpleN from "../components/SimpleName";

const Playground = () => {
  const [text, setText] = React.useState("Zeige das hier an.");
  const [showCounter, setShowCounter] = React.useState(true);

  const handleClick = () => {
    setText("Neuer text");
    console.log("handleClick", { text });
  };

  React.useEffect(() => {
    console.log("[Playground component] text effect");
  }, [text]);

  React.useEffect(() => {
    console.log("[Playground component] showCounter effect");
  }, [showCounter]);

  console.log("render Playground");

  return (
    <div className="Playground">
      <SimpleN>{"Sofia"}</SimpleN>
      <SimpleN />
      <p>Text: {text}</p>
      <button onClick={() => handleClick()}>Hier klicken</button>
      <button onClick={() => setShowCounter(false)}>Counter ausblenden</button>
      <div style={{ padding: 10 }}>{showCounter ? <Counter /> : null}</div>
      <BookList />
    </div>
  );
};

export default Playground;
