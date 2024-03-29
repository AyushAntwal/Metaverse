import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import CodeStore from "./Pages/CodeStore";
import About from "./Pages/About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <div>
    <Navbar />
  </div>
    <Routes>
      <Route index element={<App />} />
      <Route path="store" element={<CodeStore />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
