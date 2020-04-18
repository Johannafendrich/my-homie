import React from 'react';
import NavigationBottom from '../components/NavigationBottom';
import { Homie, Discover, Profile } from '../assets/Icons';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Navigation Bottom',
  decorators: [withKnobs],
};

export const Nav = () => {
  return (
    <NavigationBottom
      links={[
        {
          label: 'Homie',
          Icon: Homie,
        },

        {
          label: 'Discover',
          Icon: Discover,
        },
        {
          label: 'Profile',
          Icon: Profile,
        },
      ]}
      active={text('value', 'Discover')}
      onItemClick={action('switched to page')}
    />
  );
};
