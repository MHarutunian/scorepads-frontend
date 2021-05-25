import { useLocation, useParams } from 'react-router-dom';
import useScorepad from '../../hooks/useScorepad';
import { Scorepad } from '../Scorepads/types';
import Header from './Header';
import { ErrorText, DescriptionText, PlayerGrid } from './ui';
import PlayerCard from './PlayerCard';

interface ScorepadState {
  scorepad: Scorepad
}

interface ScorepadParams {
  scorepadId: string
}
const PlayerSelection = () => {
  const { state } = useLocation<ScorepadState>();
  const { scorepadId } = useParams<ScorepadParams>();
  const [error, scorepad] = useScorepad(scorepadId, state.scorepad);
  if (error) {
    return <ErrorText>Spieler konnten leider nicht geladen werden</ErrorText>;
  }
  return (
    <>
      <Header />
      <DescriptionText>Bitte sag mir wer du bist, um am Spiel teilzunehmen</DescriptionText>
      <PlayerGrid>
        {scorepad && scorepad.players.map(({ id: playerId, name, picture }) => (
          <PlayerCard key={playerId} playerId={playerId} name={name} picture={picture} />
        ))}
      </PlayerGrid>
    </>
  );
};

export default PlayerSelection;
