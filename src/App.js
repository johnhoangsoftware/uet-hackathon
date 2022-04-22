import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./component/login.js"
import SignUp from "./component/signup.js";

function App() {
  return (<Router>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
  />
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div class="nav-logo">
            <a class="nav-logo-item" href="/login">
              <img src="../public/img/logo.jpg" alt="Logo" />
            </a>
          </div>

          <div class="nav-list">
            <ul class="nav-list-item hide-on-mobile">
              <li><a href="#home">Trang chủ</a></li>
              <li><a href="#tu_van">Tư vấn điều trị</a></li>
              <li><a href="#dien_dan">Diễn đàn</a></li>
              <li><a href="#nha_thuoc">Nhà thuốc</a></li>
              <li><a href="#tin_nhan">Tin nhắn</a></li>
            </ul>
          </div>
          
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Routes>
            <Route exact path='/' element={<Login/>} />
            <Route path="/sign-in" element={<Login/>} />
            <Route path="/sign-up" element={<SignUp/>} />
          </Routes>
        </div>
      </div>
    </div></Router>
  );
}
export default App;
