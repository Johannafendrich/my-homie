import React from 'react';
import InputField from '../components/Input';
import EmailAtIcon from '../assets/email-at.svg';
import PasswordIcon from '../assets/password.svg';
import UserIcon from '../assets/user.svg';
import LocationIcon from '../assets/pin.svg';
import AgeIcon from '../assets/age.svg';
import EmailIcon from '../assets/email.svg';
import PhoneIcon from '../assets/phone.svg';
import UserGroupIcon from '../assets/user-group.svg';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Inputs',
  decorators: [withKnobs],
};

export const mailInput = () => (
  <>
    <InputField
      type="email"
      placeholder="E-mail"
      src={EmailAtIcon}
      value={text('')}
    />
  </>
);

export const passwordInput = () => (
  <>
    <InputField
      type="password"
      placeholder="Password"
      src={PasswordIcon}
      value={text('')}
    />
  </>
);

export const userNameInput = () => (
  <>
    <InputField
      type="text"
      placeholder="Name"
      src={UserIcon}
      value={text('')}
    />
  </>
);

export const locationInput = () => (
  <>
    <InputField
      type="text"
      placeholder="City, country"
      src={LocationIcon}
      value={text('')}
    />
  </>
);

export const ageInput = () => (
  <>
    <InputField
      type="date"
      placeholder="Date of birth"
      src={AgeIcon}
      value={text('')}
    />
  </>
);

export const numberOfGuestsInput = () => (
  <>
    <InputField
      type="number"
      min="0"
      placeholder="Maximum number of guests"
      src={UserGroupIcon}
      value={text('')}
    />
  </>
);

export const phoneContactInput = () => (
  <>
    <InputField
      type="number"
      placeholder="Phone"
      src={PhoneIcon}
      value={text('')}
    />
  </>
);

export const mailContactInput = () => (
  <>
    <InputField
      type="email"
      placeholder="E-mail"
      src={EmailIcon}
      value={text('')}
    />
  </>
);
