import React, { useState } from 'react';
import Nav from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
       {renderPage()}
    </div>
  );
}
