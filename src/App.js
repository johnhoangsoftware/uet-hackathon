import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./component/login.js"
import SignUp from "./component/signup.js";
import HomePage from "./component/homepage.js";

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
          <div className="nav-logo">
            <a className="nav-logo-item" href="/login">
              <img src="assets/images/logo.png" alt="Logo" />
            </a>
          </div>

          <div className="nav-list">
            <ul className="nav-list-item hide-on-mobile">
              <li><a href="#home">Trang chủ</a></li>
              <li><a href="#tu_van">Tư vấn điều trị</a></li>
              <li><a href="#dien_dan">Diễn đàn</a></li>
              <li><a href="#nha_thuoc">Nhà thuốc</a></li>
              <li><a href="#tin_nhan">Tin nhắn</a></li>
            </ul>
          </div>
          
        </div>
      </nav>

    
      <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route path="/sign-in" element={<Login/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
       
    </div></Router>
    
  );
}
export default App;
