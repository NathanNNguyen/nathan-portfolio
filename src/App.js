import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, About, Project, Contact } from './components';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path='/project'>
            <Project />
          </Route>

          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
