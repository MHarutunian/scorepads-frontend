import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import List from '../UserManagement/List';
import Header from '../Header';
import TermList from '../Jank/TermManagement/TermList';

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
          <TermList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
