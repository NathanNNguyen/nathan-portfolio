import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navigation, Home, About, Project, Contact } from './components';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Navigation />
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
    </div>
  );
}

export default App;
