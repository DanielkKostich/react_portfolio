import React from 'react';

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className="nav ">
       <li >
       <a 
          href="#home"
          onClick={() => handlePageChange('Home')}
                   className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
       Home
        </a>  
      </li>
      <li >
        <a 
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li >
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
         className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
         className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
    </ul>
    
  );
}

 
