import React from 'react';

import Navbar from './navbar';

import '../sass/layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
