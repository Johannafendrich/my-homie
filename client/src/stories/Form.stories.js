import React from 'react';
import Form from '../components/Form';
import Input from '../components/Input';
import InputContainer from '../components/InputContainer';
import EmailAtIcon from '../assets/email-at.svg';
import PasswordIcon from '../assets/password.svg';

export default {
  title: 'Login',
};

export const loginForm = () => (
  <Form>
    <InputContainer>
      <img src={EmailAtIcon} alt="email" />
      <Input type="email" placeholder="E-mail" />
    </InputContainer>
    <InputContainer>
      <img src={PasswordIcon} alt="password" />
      <Input type="password" placeholder="Password" />
    </InputContainer>
  </Form>
);
