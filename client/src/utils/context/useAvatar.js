import { useContext } from 'react';
import AvatarContext from './AvatarContext';

function useAvatar() {
  return useContext(AvatarContext);
}
export default useAvatar;
