import React from 'react';
import ThemeProvider from '../../providers/ThemeProvider';
import Container from './Container';
import Footer from './Footer';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';

const Layout = ({ children, location }) => {
  return (
    <ThemeProvider>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content="Lionel Ritchie's Personal Website" />
      </Helmet>

      <Navbar location={location} />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
