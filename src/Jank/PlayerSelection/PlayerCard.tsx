import { Player } from '../Scorepads/types';
import { Picture, Card } from './ui';

type CardProps = {
  player: Player;
  scorepadId: string;
}

const PlayerCard = (
  { player, scorepadId }: CardProps,
) => (

  <Card to={`${scorepadId}/${player.id}`}>
    <Picture src={`/picture/${player.picture}`} alt={`Bild von ${player.name}`} />
    {player.name}
  </Card>
);

export default PlayerCard;
