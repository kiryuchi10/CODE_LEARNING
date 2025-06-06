import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

import Cover from './components/Cover';
import Profile from './components/Profile';
import Resume from './components/Resume';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <NavigationBar />
      <div style={{ marginLeft: '180px', padding: '2rem', flex: 1 }}>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
