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
        <meta
          name='google-site-verification'
          content='V5rEvAcpkptmx_qPOo2kedepOUulvn302fNq3lavW5M'
        />
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
