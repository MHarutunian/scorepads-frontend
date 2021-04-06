import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import List from '../UserManagement/List';
import Menu from '../Menu/Menu';
import { GlobalStyles } from './ui';
import JankSwitch from '../Jank/JankSwitch';
import Home from '../Home/Home';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Menu>
            <h2>TODO</h2>
          </Menu>
          <List />
        </Route>
        <Route path="/doppelkopf">
          <Menu>
            <h2>TODO</h2>
          </Menu>
        </Route>
        <Route path="/jank">
          <JankSwitch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
