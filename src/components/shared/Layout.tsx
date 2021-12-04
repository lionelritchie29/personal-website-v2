import React from 'react';
import ThemeProvider from '../../providers/ThemeProvider';
import Container from './Container';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, location }) => {
  return (
    <ThemeProvider>
      <Navbar location={location} />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
