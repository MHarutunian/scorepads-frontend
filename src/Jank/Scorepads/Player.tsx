import { Text } from './ui';

type PlayerProps = {
  name: string;
  picture: string;
}

const Player = ({ name, picture }: PlayerProps) => (
  <>
    <img src={picture} alt="PIC" />
    <Text>
      {name}
    </Text>
  </>
);

export default Player;
