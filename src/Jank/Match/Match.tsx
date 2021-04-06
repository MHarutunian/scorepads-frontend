import { useParams } from 'react-router-dom';
import Menu from '../../Menu/Menu';

import * as ui from './ui';

type MatchParams = {
  scorepadId: string
}

const Match = () => {
  const { scorepadId } = useParams<MatchParams>();

  return (
    <ui.Page>
      <Menu>
        TODO:
        {' '}
        {scorepadId}
      </Menu>
    </ui.Page>
  );
};

export default Match;
