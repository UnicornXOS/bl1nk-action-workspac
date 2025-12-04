import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="container">
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
