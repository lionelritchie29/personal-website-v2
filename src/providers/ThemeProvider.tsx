import ThemeToggler from 'gatsby-plugin-dark-mode/ThemeToggler';
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeToggler>
        {({ theme, toggleTheme }) => <>{setTheme(theme)}</>}
      </ThemeToggler>

      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
