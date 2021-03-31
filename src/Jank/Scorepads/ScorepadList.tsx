import { useEffect, useReducer } from 'react';
import useScorepads from '../../hooks/useScorepads';
import ScorepadItem from './Scorepad';
import { setScorepads } from './actions';
import reducer from './reducer';
import { ErrorText } from './ui';

const ScorepadList = () => {
  const [error, apiScorepads] = useScorepads('JanK');
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
      <h3>Bestehende Spiele:</h3>
      <div>
        {scorepads.map((scorepad) => (
          <ScorepadItem
            key={scorepad.id}
            scorepad={scorepad}
            dispatch={dispatch}
          />
        ))}
      </div>
    </>
  );
};

export default ScorepadList;
