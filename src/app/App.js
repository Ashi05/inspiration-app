import React from "react";
import logo from "../../src/logo.svg";
import "./App.css";
import Weather from "../features/weather/Weather";
import Quotes from "../features/quotes/Quotes";
import Todos from "../features/todos/Todos";

function App() {
  return (
    <div className="App">
      <Weather />
      <Todos />
      <Quotes />
    </div>
  );
}

export default App;
