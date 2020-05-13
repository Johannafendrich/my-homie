import React from 'react';
import { useLocation } from 'react-router-dom';
import NavButtom from '../components/NavigationBottom';
import { Homie, Discover, Profile } from '../assets/Icons';

const BottomNav = () => {
  const location = useLocation();
  return (
    <NavButtom
      links={[
        { label: 'Homies', Icon: Homie, navLink: '/homies' },
        { label: 'Discover', Icon: Discover, navLink: '/home' },
        { label: 'Profile', Icon: Profile, navLink: '/profile' },
      ]}
      value={location.pathname}
    />
  );
};
export default BottomNav;
