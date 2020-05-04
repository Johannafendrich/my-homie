import { createContext } from 'react';
import PlaceholderAvatar from '../../assets/profile/avatarPlaceholder.svg';

function noop() {}
const AvatarContext = createContext({
  image: { PlaceholderAvatar },
  setImage: noop,
});
export default AvatarContext;
