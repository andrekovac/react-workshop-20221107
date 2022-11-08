import React from "react";
import logo from "./logo.svg";
import "./App.css";

const MeinParagraph = () => {
  return (
    <p className="my-class" style={{ backgroundColor: "blue" }}>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
  );
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {1 === 1 ? <MeinParagraph /> : <div>bla bla</div>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
