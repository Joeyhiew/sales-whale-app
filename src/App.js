import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home.js";
import Teams from "./pages/Teams.js";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Teams" element={<Teams />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
