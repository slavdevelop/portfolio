import React from 'react';

import Navbar from './navbar';

import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
