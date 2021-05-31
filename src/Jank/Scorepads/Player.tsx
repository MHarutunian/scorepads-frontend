import { Text, Picture } from './ui';
import defaultPicture from '../../UserManagement/user_default.png';

type PlayerProps = {
  name: string;
  picture: string | null;
}

const Player = ({ name, picture }: PlayerProps) => (
  <>
    <Picture src={picture ? `/picture/${picture}` : defaultPicture} alt={`Picture of ${name}`} />
    <Text>
      {name}
    </Text>
  </>
);

export default Player;
