import React from 'react';
import Form from './Form';
import InputContainer from './InputContainer';
import Input from './Input';
import EmailAtIcon from '../assets/email-at.svg';
import PasswordIcon from '../assets/password.svg';
import { Button, ButtonSize } from './Button';

function LoginInputForm() {
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');

  function handleSubmit() {
    alert('Welcome Back');
  }

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputContainer>
        <img src={EmailAtIcon} alt="email" />
        <Input
          type="email"
          placeholder="E-mail"
          value={userEmail}
          onChange={(event) => {
            setUserEmail(event.target.value);
          }}
        />
      </InputContainer>
      <InputContainer>
        <img src={PasswordIcon} alt="password" />
        <Input
          type="password"
          placeholder="Password"
          value={userPassword}
          onChange={(event) => {
            setUserPassword(event.target.value);
          }}
        />
      </InputContainer>
      <ButtonSize>
        <Button type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </ButtonSize>
    </Form>
  );
}
export default LoginInputForm;
