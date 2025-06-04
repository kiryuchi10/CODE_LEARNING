import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<div>Profile Page</div>} />
        <Route path="/resume" element={<div>Resume Page</div>} />
        <Route path="/projects" element={<div>Projects Page</div>} />
      </Routes>
    </>
  );
}

export default App;
