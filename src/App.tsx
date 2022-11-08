import "./App.css";
import SimpleN, { name } from "./components/SimpleName";

const App = () => {
  return (
    <div className="App">
      <SimpleN />
      <div>{name}</div>
    </div>
  );
};

export default App;
