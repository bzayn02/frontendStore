import React from 'react';

const Footer = () => {
  const currentDate = new Date();
  const thisYear = currentDate.getFullYear();
  return (
    <div className="text-center flex items-center justify-center h-24 bg-gray-600 text-white">
      Bijay's Store || &copy; All rights reserved {thisYear}
    </div>
  );
};

export default Footer;
