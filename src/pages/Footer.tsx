import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto p-4">
        <p className="text-center text-sm">
          &copy; {year} Aya Kessab. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
