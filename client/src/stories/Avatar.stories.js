import React from 'react';
import Avatar from '../components/Avatar';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Avatar',
};

export const AvatarExample = () => (
  <Avatar onClick={action('Upload your Image')} />
);
