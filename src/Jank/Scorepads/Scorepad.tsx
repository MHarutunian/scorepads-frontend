import { useCallback } from 'react';
import { format } from 'date-fns';
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
  const [error, onClick] = useErrorHandler(callback);
  const formattedDate = format(new Date(date), ' dd.MM.yyyy');

  return (
    <Frame>
      {players && players.map(({ id: playerId, name, picture }) => (
        <PlayerItem key={playerId} name={name} picture={picture} />
      ))}
      <Text>
        Erstellt am:
        {formattedDate}
      </Text>
      <LoadButton type="button">Spiel laden</LoadButton>
      <DeleteButton onClick={onClick} type="button">Spiel löschen</DeleteButton>
      {error && <ErrorText>Scorepad konnte nicht gelöscht werden.</ErrorText>}
    </Frame>
  );
};

export default Scorepad;
