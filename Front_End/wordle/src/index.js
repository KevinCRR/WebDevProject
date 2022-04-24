import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Scores from "./scores";
import Navigation from "./header";
import reportWebVitals from "./reportWebVitals";
import $ from "jquery";

const root = ReactDOM.createRoot(document.getElementById("root"));
var page = "main";
$(function () {
  $(".Menu").on("click", function (e) {
    e.preventDefault();
    if ($(".side-categories").is(":visible")) {
      $(".side-categories").hide();
    } else {
      $(".side-categories").show();
    }
  });

  $(".Scoreboard").on("click", function (e) {
    page = "scoreboard";
    console.log("clicked");
  });
});

root.render(
  <React.StrictMode>
    <Navigation />
    <ul className="side-categories" style={{ display: "none" }}>
      <li>
        <a href="#">Login</a>
      </li>
      <hr />
      <li>
        <a href="#">Register</a>
      </li>
    </ul>

    {page === "scoreboard" ? <Scores /> : <App />}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
