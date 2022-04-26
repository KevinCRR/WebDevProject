import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "../src/Views/App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <App />
    <Navigation />
    <ul className="side-categories" style={{ display: "none" }}>
      <li>
        <a href="login">Login</a>
      </li>
      <hr />
      <li>
        <a href="register">Register</a>
      </li>
    </ul>

    {page === "scoreboard" ? <Scores /> : <App />}
  </React.StrictMode>
);

