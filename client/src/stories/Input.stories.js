import React from 'react';
import InputField, { InputContainer } from '../components/Input';
import EmailAtIcon from '../assets/email-at.svg';
import PasswordIcon from '../assets/password.svg';
import UserIcon from '../assets/user.svg';
import LocationIcon from '../assets/pin.svg';
import AgeIcon from '../assets/age.svg';
import EmailIcon from '../assets/email.svg';
import PhoneIcon from '../assets/phone.svg';
import UserGroupIcon from '../assets/user-group.svg';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Inputs',
};

export const mailInput = () => (
  <InputContainer>
    <img src={EmailAtIcon} />
    <InputField type="email" placeholder="E-mail" onChange={action('write')} />
  </InputContainer>
);

export const passwordInput = () => (
  <InputContainer>
    <img src={PasswordIcon} />
    <InputField
      type="password"
      placeholder="Password"
      onChange={action('write')}
    />
  </InputContainer>
);

export const userNameInput = () => (
  <InputContainer>
    <img src={UserIcon} />
    <InputField type="text" placeholder="Name" onChange={action('write')} />
  </InputContainer>
);

export const locationInput = () => (
  <InputContainer>
    <img src={LocationIcon} />
    <InputField
      type="text"
      placeholder="City, country"
      onChange={action('write')}
    />
  </InputContainer>
);

export const ageInput = () => (
  <InputContainer>
    <img src={AgeIcon} />
    <InputField
      type="number"
      placeholder="Date of birth"
      onChange={action('write')}
    />
  </InputContainer>
);

export const numberOfGuestsInput = () => (
  <InputContainer>
    <img src={UserGroupIcon} />
    <InputField
      type="number"
      min="0"
      placeholder="Maximum number of guests"
      onChange={action('write')}
    />
  </InputContainer>
);

export const phoneContactInput = () => (
  <InputContainer>
    <img src={PhoneIcon} />
    <InputField
      type="number"
      min="0"
      placeholder="Phone"
      onChange={action('write')}
    />
  </InputContainer>
);

export const mailContactInput = () => (
  <InputContainer>
    <img src={EmailIcon} />
    <InputField type="email" placeholder="E-mail" onChange={action('write')} />
  </InputContainer>
);
