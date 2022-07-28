import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import InventoryList from './components/InventoryList';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div>
        <Routes>
        <Route
          path='/'
          element={<Home/>}
          />
        <Route
          path='/InventoryList'
          element={<InventoryList/>}
          />
        <Route 
          path="/login" 
          element={<Login />} 
          />
        <Route 
          path="/signup" 
          element={<Signup />} 
          />
        </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
