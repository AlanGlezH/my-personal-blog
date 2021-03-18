import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/globalStyle';
import NavBar from './components/NavBar';
import { lightTheme, darkTheme } from './components/themes';
import useDarkMode from './hooks/useDarkMode';
import Home from './pages/Home';

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  if (!mountedComponent) return <div />;

  return (
    <>
      <Router>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Switch>
            <Route path='/'>
              <Home theme={theme} themeToggler={themeToggler} />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
