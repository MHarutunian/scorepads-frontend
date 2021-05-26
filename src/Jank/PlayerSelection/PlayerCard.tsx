import { useParams } from 'react-router-dom';
import defaultPicture from '../../UserManagement/user_default.png';
import { Picture, Card } from './ui';

type PlayerProps = {
  playerId: string;
  name: string;
  picture: string;
}

interface ScorepadParams {
  scorepadId: string
}
const PlayerCard = ({ playerId, name, picture = defaultPicture }: PlayerProps) => {
  const { scorepadId } = useParams<ScorepadParams>();
  return (

    <Card to={`${scorepadId}/${playerId}`}>
      <Picture src={`/picture/${picture}`} alt={`Bild von ${name}`} />
      {name}
    </Card>
  );
};

export default PlayerCard;
