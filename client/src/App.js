import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav"
import Footer from './components/card';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Footer />
      </div>
    </Router>
  );
}

export default App;