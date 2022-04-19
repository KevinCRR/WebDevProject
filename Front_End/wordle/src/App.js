import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React from "react";

function App() {
  const [mess, setMess] = React.useState(null);

  React.useEffect(() => {
    axios.get("/test").then((response) => {
      setMess(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>from backend: {mess}</p>
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
}

export default App;
