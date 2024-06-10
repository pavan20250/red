import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='container'>
      <div className='footer'>
        <p>© {currentYear} 'Name'. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer
