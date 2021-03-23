import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useDarkMode } from './context/darkmode-context';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => {
  const { mountedComponent } = useDarkMode();

  if (!mountedComponent) return <div />;

  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/blog' component={Blog} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
