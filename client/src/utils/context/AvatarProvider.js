import React from 'react';
import AvatarContext from './AvatarContext';
import PropTypes from 'prop-types';
import useSessionStorage from '../sessionStorageHook';

function AvatarProvider({ children }) {
  const [image, setImage] = useSessionStorage('image', '');

  const avatarContextValue = { image, setImage };
  return (
    <AvatarContext.Provider value={avatarContextValue}>
      {children}
    </AvatarContext.Provider>
  );
}
AvatarProvider.propTypes = {
  children: PropTypes.node,
};
export default AvatarProvider;
