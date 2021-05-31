import { useCallback } from 'react';
import useErrorHandler from '../../hooks/useErrorHandler';
import { remove } from '../../services/api.service';
import { deleteScorepad } from './actions';
import PlayerItem from './Player';
import { Scorepad as ScorepadType, ScorepadAction } from './types';
import {
  LoadButton, DeleteButton, Frame, Text, ErrorText,
} from './ui';

type ScorepadProps = {
  scorepad: ScorepadType;
  dispatch: (action: ScorepadAction) => void;
}

const Scorepad = ({
  scorepad, dispatch,
}: ScorepadProps) => {
  const { id, players, date } = scorepad;
  const callback = useCallback(async () => {
    await remove(`/scorepads/${id}`);
    dispatch(deleteScorepad(id));
  }, [dispatch, id]);
  const [error, handleDelete] = useErrorHandler(callback);
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <Frame>
      {players && players.map(({ id: playerId, name, picture }) => (
        <PlayerItem key={playerId} name={name} picture={picture} />
      ))}
      <Text>
        Erstellt am:
        {` ${formattedDate}`}
      </Text>
      <LoadButton to={{
        pathname: `/jank/${id}`,
        state: { scorepad },
      }}
      >
        Spiel laden
      </LoadButton>
      <DeleteButton onClick={handleDelete} type="button">Spiel löschen</DeleteButton>
      {error && <ErrorText>Scorepad konnte nicht gelöscht werden.</ErrorText>}
    </Frame>
  );
};

export default Scorepad;
