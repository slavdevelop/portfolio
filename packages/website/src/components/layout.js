import React from 'react';

import Navbar from './navbar';
import { Button } from './button';

import '../sass/layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Button>Styled btn</Button>
    </>
  );
};

export default Layout;
