import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDarkMode } from './context/darkmode-context';
import Home from './pages/Home';

const App = () => {
  const { mountedComponent } = useDarkMode();

  if (!mountedComponent) return <div />;

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
