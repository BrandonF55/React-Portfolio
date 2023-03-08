import React, { createContext, useState, useContext, useEffect } from 'react';

export const ThemeContext = createContext({});

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.add(theme);
    return () => {
      html.classList.remove(theme);
    };
  }, [theme]);

  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeProvider