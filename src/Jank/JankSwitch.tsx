import { Route, Switch } from 'react-router-dom';
import Match from './Match/Match';
import ScorepadList from './Scorepads/ScorepadList';
import TermList from './TermManagement/TermList';

const JankSwitch = () => (
  <Switch>
    <Route exact path="/jank">
      <ScorepadList />
    </Route>
    <Route path="/jank/terms">
      <TermList />
    </Route>
    <Route path="/jank/:scorepadId">
      <Match />
    </Route>
  </Switch>
);

export default JankSwitch;
