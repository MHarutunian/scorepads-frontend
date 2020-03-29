import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import List from '../UserManagement/List';
import Header from '../Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/users">
          <List />
        </Route>
        <Route path="/doppelkopf">
          <h2>TODO</h2>
        </Route>
        <Route path="/jank">
          <h2>TODO</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
