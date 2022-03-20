import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home.js";
import Teams from "./pages/Teams.js";
import Leads from "./pages/Leads.js";
import Reports from "./pages/Reports.js";
import Campaigns from "./pages/Campaigns.js";
import Main from "./pages/Main.js";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Leads" element={<Leads />} />
          <Route path="/Reports" element={<Reports />} />
          <Route path="/Campaigns" element={<Campaigns />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
