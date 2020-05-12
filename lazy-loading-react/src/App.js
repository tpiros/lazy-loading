import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Fibonacci from './components/Fibonacci';

const Home = lazy(() => import('./components/Home'));
// const Fibonacci = lazy(() => import(
  /* webpackMode: "lazy" */
  /* webpackPreload: true */
  // './components/Fibonacci'));

  const Fibonacci = lazy(() => import(
     /* webpackMode: "lazy" */
     /* webpackPrefetch: true */
     /* webpackPreload: true */
     /* webpackChunkName: "fibonacci" */ './components/Fibonacci'));

  /* webpackPrefetch: true */
const App = () => {
  return (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/fibonacci">Fibonacci</Link>
        </li>
      </ul>
    </nav>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/fibonacci" component={Fibonacci}/>
      </Switch>
    </Suspense>

  </Router>
)};

export default App;
