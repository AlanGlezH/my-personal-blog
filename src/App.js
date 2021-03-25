import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Spinner } from './components/Spinner';
import { useDarkMode } from './context/darkmode-context';

const Blog = React.lazy(() => import('./pages/Blog'));
const Home = React.lazy(() => import('./pages/Home'));

const App = () => {
  const { mountedComponent } = useDarkMode();

  if (!mountedComponent) return <div />;

  return (
    <>
      <Router>
        <NavBar />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/blog'>
              <Blog />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};

export default App;
