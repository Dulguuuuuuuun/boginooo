import React from 'react'
import {useState, useEffect,userRef} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import "./App.css"
import axios from "axios"
import Link from "./pages/Link"
import Login from './pages/Login';
import Forgot from './pages/Forgot';
import SignUp from './pages/SignUp';
import Logged from './pages/Logged';

export const instance = axios.create({
  baseURL: "http://localhost:6969/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
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
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/user/:_id" element={<Logged />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App