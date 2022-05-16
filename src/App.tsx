import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./page/Profile";
import Study from "./page/Study";
import Tech from "./page/Tech";
import Project from "./page/Project";
import Main from "./page/Main";

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/profile" element={<Profile/>} />
              <Route path="/project" element={<Project/>} />
              <Route path="/tech" element={<Tech/>} />
              <Route path="/study" element={<Study/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
