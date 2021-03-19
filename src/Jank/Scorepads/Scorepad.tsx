import { useCallback } from 'react';
import useErrorHandler from '../../hooks/useErrorHandler';
import { remove } from '../../services/api.service';
import { deleteScorepad } from './actions';
import PlayerItem from './Player';
import { Player, ScorepadAction } from './types';
import {
  LoadButton, DeleteButton, Frame, Text, ErrorText,
} from './ui';

type ScorepadProps = {
  id: string;
  players: Player[];
  createdAt: string;
  dispatch: (action: ScorepadAction) => void;
}

const Scorepad = ({
  id, players, createdAt, dispatch,
}: ScorepadProps) => {
  const callback = useCallback(async () => {
    await remove(`/scorepads/${id}`);
    dispatch(deleteScorepad(id));
  }, [dispatch, id]);
  const [error, onClick] = useErrorHandler(callback);

  return (
    <Frame>
      {players && players.map(({ _id, name, picture }) => (
        <PlayerItem key={_id} name={name} picture={picture} />
      ))}
      <Text>
        Erstellt am:
        {createdAt}
      </Text>
      <LoadButton type="button">Spiel laden</LoadButton>
      <DeleteButton onClick={onClick} type="button">Spiel löschen</DeleteButton>
      {error && <ErrorText>Scorepad konnte nicht gelöscht werden.</ErrorText>}
    </Frame>
  );
};

export default Scorepad;
