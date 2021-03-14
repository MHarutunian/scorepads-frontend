import './User.css';
import defaultPicture from './user_default.png';

interface UserProps {
  name: string,
  picture?: string
}

const User = ({ name, picture = defaultPicture }: UserProps) => (
  <>
    <img src={picture} alt={name} className="picture" />
    <span>{name}</span>
  </>
);

User.defaultProps = {
  picture: defaultPicture,
};

export default User;
