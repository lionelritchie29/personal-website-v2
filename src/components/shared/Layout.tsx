import React from 'react';
import ThemeProvider from '../../providers/ThemeProvider';
import Container from './Container';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Container>{children}</Container>
      </main>
    </ThemeProvider>
  );
};

export default Layout;
