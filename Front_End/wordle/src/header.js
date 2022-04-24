import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./header.css";
import chart from "./icons8-leaderboard-24.png";
import menu from "./icons8-menu.svg";
import $ from "jquery";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <a>
          <img src={menu} className="Menu" alt="Menu" />
        </a>
        <Navbar.Brand href="#home" id="header-content">
          Wordle
        </Navbar.Brand>
        <img src={chart} className="Scoreboard" alt="Scoreboard" />
      </Container>
    </Navbar>
  );
}

export default Navigation;
