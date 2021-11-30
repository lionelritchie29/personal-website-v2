import React from 'react';
import Container from './Container';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default Layout;
