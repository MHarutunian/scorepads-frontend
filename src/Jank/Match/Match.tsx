import { useParams } from 'react-router-dom';
import Menu from '../../Menu/Menu';

import * as ui from './ui';

type MatchParams = {
  scorepadId: string;
  playerId: string;
}

const Match = () => {
  const { scorepadId, playerId } = useParams<MatchParams>();

  return (
    <ui.Page>
      <Menu>
        TODO:
        {' '}
        {scorepadId}
        {' '}
        {playerId}
      </Menu>
    </ui.Page>
  );
};

export default Match;
