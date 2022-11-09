import "./App.css";
import SimpleN from "./components/SimpleName";

const handleClick = (text: string) => alert(text);

const App = () => {
  const text = "Zeige das hier an.";

  return (
    <div className="App">
      <SimpleN />
      <button onClick={() => handleClick(text)}>Hier klicken</button>
    </div>
  );
};

export default App;
