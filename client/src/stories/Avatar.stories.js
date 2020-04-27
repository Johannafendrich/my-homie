import React from 'react';
import Avatar from '../components/Avatar';
import PlaceholderAvatar from '../assets/profile/avatarPlaceholder.svg';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Avatar',
};

export const AvatarDefault = () => (
  <>
    <Avatar
      src={PlaceholderAvatar}
      onClick={action('Upload your Profile image')}
    ></Avatar>
  </>
);
