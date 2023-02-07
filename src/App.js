import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Books from "./components/Books";
import Update from "./components/Update";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Books />} />
          <Route path={"/update/:id"} element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
