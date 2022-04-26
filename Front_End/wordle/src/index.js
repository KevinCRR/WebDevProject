import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "../src/Views/App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <ul className="side-categories" style={{ display: "none" }}>
      <li></li>
    </ul>
  </React.StrictMode>
);
