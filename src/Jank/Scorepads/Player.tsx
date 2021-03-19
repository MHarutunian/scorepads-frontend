import { Text } from './ui';
import defaultPicture from '../../UserManagement/user_default.png';

type PlayerProps = {
  name: string;
  picture: string;
}

const Player = ({ name, picture = defaultPicture }: PlayerProps) => (
  <>
    <img src={picture} alt="PIC" />
    <Text>
      {name}
    </Text>
  </>
);

export default Player;
