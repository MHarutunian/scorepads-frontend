import { Player } from '../Scorepads/types';
import { Picture, Card } from './ui';

type CardProbs = {
  player: Player;
  scorepadId: string;
}

const PlayerCard = (
  { player, scorepadId }: CardProbs,
) => (

  <Card to={`${scorepadId}/${player.id}`}>
    <Picture src={`/picture/${player.picture}`} alt={`Bild von ${player.name}`} />
    {player.name}
  </Card>
);

export default PlayerCard;
