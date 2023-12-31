import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ContactUs from './ContactUs';
// Import your components

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} /> */}
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
