import React from 'react';
import Footer from './Footer';
import NavigationBar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="">
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
