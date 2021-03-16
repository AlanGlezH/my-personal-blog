import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyle';
import NavBar from './components/NavBar';
import { lightTheme, darkTheme } from './components/themes';
import useDarkMode from './hooks/useDarkMode';

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  if (!mountedComponent) return <div />;

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div className='App'>
          <NavBar theme={theme} themeToggler={themeToggler}></NavBar>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
