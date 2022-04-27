import "../Styles/App.css";

import React, { useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import HomeView from "./HomeView";
import LoginView from "./LoginView";
import RegisterView from "./RegisterView";
import ScoreView from "./ScoreView";
import BoardView from "./BoardView";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [token, setToken] = useState(false);
  return (
    <>
      <Router>
        <NavBar isLogged={token} />

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView setToken={setToken} />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/score" element={<ScoreView />} />
          <Route path="/boardview" element={<BoardView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
