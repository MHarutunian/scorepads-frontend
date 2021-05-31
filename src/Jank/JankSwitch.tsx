import { Route, Switch } from 'react-router-dom';
import PlayerSelection from './PlayerSelection/PlayerSelection';
import ScorepadList from './Scorepads/ScorepadList';
import TermList from './TermManagement/TermList';
import Match from './Match/Match';

const JankSwitch = () => (
  <Switch>
    <Route exact path="/jank">
      <ScorepadList />
    </Route>
    <Route path="/jank/terms">
      <TermList />
    </Route>
    <Route exact path="/jank/:scorepadId">
      <PlayerSelection />
    </Route>
    <Route path="/jank/:scorepadId/:playerId">
      <Match />
    </Route>
  </Switch>
);

export default JankSwitch;
