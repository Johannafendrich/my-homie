import React from 'react';
import Form from './Form';
import InputContainer from './InputContainer';
import Input from './Input';
import EmailAtIcon from '../assets/email-at.svg';
import PasswordIcon from '../assets/password.svg';

function LoginInputForm() {
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <InputContainer>
        <img src={EmailAtIcon} alt="email" />
        <Input
          type="email"
          placeholder="E-mail"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <img src={PasswordIcon} alt="password" />
        <Input
          type="password"
          placeholder="Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </InputContainer>
    </Form>
  );
}
export default LoginInputForm;
