import React, { useState } from 'react';
import NavButtom from '../components/NavigationBottom';
import { Homie, Discover, Profile } from '../assets/Icons';

const BottomNav = () => {
  const [active, setActive] = useState('');

  return (
    <NavButtom
      links={[
        { label: 'Homie', Icon: Homie, navLink: '/homie' },
        { label: 'Discover', Icon: Discover, navLink: '/home' },
        { label: 'Profile', Icon: Profile, navLink: '/profile' },
      ]}
      value={active}
      onItemClick={(label) => setActive(label)}
    />
  );
};
export default BottomNav;

// <NavItem
//   key={link.label}
//   active={active === link.label}
//   onClick={() => onItemClick(link.label)}
//   to={link.navLink}
// >
//   <link.Icon active={active === link.label} />
// </NavItem>;
