import ThemeToggler from 'gatsby-plugin-dark-mode/ThemeToggler';
import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setTheme(localStorage.getItem('theme'));
    }
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
