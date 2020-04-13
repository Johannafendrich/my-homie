import React from 'react';
import Input from '../components/Input';
import InputContainer from '../components/InputContainer';
import EmailAtIcon from '../assets/email-at.svg';
import PasswordIcon from '../assets/password.svg';
import UserIcon from '../assets/user.svg';
import LocationIcon from '../assets/pin.svg';

export default {
  title: 'Inputs',
};

export const mailInput = () => (
  <InputContainer>
    <img src={EmailAtIcon} alt="email" />
    <Input type="email" placeholder="E-mail" />
  </InputContainer>
);

export const passwordInput = () => (
  <InputContainer>
    <img src={PasswordIcon} alt="password" />
    <Input type="password" placeholder="Password" />
  </InputContainer>
);

export const userNameInput = () => (
  <InputContainer>
    <img src={UserIcon} alt="name" />
    <Input type="text" placeholder="Name" />
  </InputContainer>
);

export const locationInput = () => (
  <InputContainer>
    <img src={LocationIcon} alt="name" />
    <Input type="text" placeholder="City, country" />
  </InputContainer>
);
