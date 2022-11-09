import "./App.css";
import SimpleN from "./components/SimpleName";

const App = () => {
  let text = "Zeige das hier an.";

  const handleClick = () => {
    console.log("vorher", { text });
    text = "Neuer Text";
    console.log("nachher", { text });
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
