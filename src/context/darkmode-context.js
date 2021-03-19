import React, { useState, useEffect, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../components/themes';
import { GlobalStyles } from '../components/globalStyle';

const ThemeContext = React.createContext();

export function UseDarkModeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [mountedComponent, setMountedComponent] = useState(false);

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  const setMode = (savedTheme) => {
    localStorage.setItem('theme', savedTheme);
    setTheme(savedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setMode(savedTheme);
    setMountedComponent(true);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeToggler, mountedComponent }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useDarkMode must be in UserDarkMode provider');
  }
  return context;
}
