import React from 'react';
import './App.css';
import Menu from './components/Menu';
import loadable from '@loadable/component';
import { Route } from 'react-router-dom';
const RedPage = loadable(()=> import('./pages/RedPage'));
const BluePage = loadable(() => import('./pages/BluePage'));
const UsersPage = loadable(() => import('./pages/UsersPage'));

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
      <Route path="/users" component={UsersPage} />
    </div>
  );
}

export default App;
