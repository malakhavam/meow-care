import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-6">
      <div className="container">
        &copy;{new Date().getFullYear()} by Meow Care
      </div>
    </footer>
  );
};

export default Footer;
