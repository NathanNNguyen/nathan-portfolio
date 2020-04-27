import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navigation, Home, About, Project, Contact } from './components';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/project' component={Project} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
