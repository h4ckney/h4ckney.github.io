import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./page/Profile";
import Study from "./page/Study";
import Tech from "./page/Tech";
import Project from "./page/Project";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Profile/>} />
              <Route path="/project" element={<Project/>} />
              <Route path="/tech" element={<Tech/>} />
              <Route path="/study" element={<Study/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
