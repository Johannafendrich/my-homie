import React from 'react';
import Dropdown from '../components/Dropdown';
import UserGroupIcon from '../assets/user-group.svg';

export default {
  title: 'Dropdowns',
};

export const genderDropdown = () => {
  return (
    <Dropdown
      src={UserGroupIcon}
      placeholder="Gender"
      value=""
      data={[
        {
          value: 1,
          label: 'Female',
        },
        {
          value: 2,
          label: 'Male',
        },
        {
          value: 3,
          label: 'Other',
        },
      ]}
    />
  );
};

export const guestsDropdown = () => {
  return (
    <Dropdown
      src={UserGroupIcon}
      placeholder="Maximum number of guests"
      value=""
      data={[
        {
          value: 1,
          label: '1',
        },
        {
          value: 2,
          label: '2',
        },
        {
          value: 3,
          label: '3',
        },
        {
          value: 4,
          label: '4+',
        },
      ]}
    />
  );
};
