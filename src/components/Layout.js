import React from 'react';
import Footer from './Layout/Footer';
import Banner from './Layout/navigation/Banner';
import NavigationBar from './Layout/navigation/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <Banner />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
