import { useEffect, useReducer } from 'react';
import useApi from '../../hooks/useApi';
import ScorepadItem from './Scorepad';
import { setScorepads } from './actions';
import reducer from './reducer';
import { ErrorText } from './ui';
import { Scorepad } from './types';

const ScorepadList = () => {
  const [error, apiScorepads] = useApi<Scorepad[]>('/scorepads/?game=JanK');
  const [scorepads, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    if (apiScorepads !== null) {
      dispatch(setScorepads(apiScorepads));
    }
  }, [apiScorepads]);

  if (error) {
    return <ErrorText>Scorepads konnten leider nicht geladen werden</ErrorText>;
  }
  return (
    <>
      <h3>Bestehende Spiele</h3>
      <div>
        {scorepads && scorepads.map(({ _id, players, createdAt }) => (
          <ScorepadItem
            key={_id}
            id={_id}
            players={players}
            createdAt={createdAt}
            dispatch={dispatch}
          />
        ))}
      </div>
    </>
  );
};

export default ScorepadList;
