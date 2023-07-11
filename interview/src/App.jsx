import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Upload } from "./components/Upload";
import { List } from "./components/List";
import { Home } from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/list" element={<List />} />
      <Route path="*" element={<h1>No such Route Found</h1>} />
    </Routes>
  );
}

export default App;
