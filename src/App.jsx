import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Add from "./Compo/Add";
import View from "./Compo/View";
import Edit from "./Compo/Edit";
import Nav from "./Navigate/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
