import React from 'react'
import {useState, useEffect,userRef} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import "./App.css"
import axios from "axios"
import Link from "./pages/Link"
import Login from './pages/Login';
import Forgot from './pages/Forgot';

export const instance = axios.create({
  baseURL: "http://localhost:6969",
});


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:shortId" element={<Link />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App