import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Loading from "./pages/Loading";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Dashboard />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
}
