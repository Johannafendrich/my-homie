import React from 'react';
import { Link } from 'react-router-dom';
import BasicCard from '../components/BasicCard';
import Container from '../components/Container';
import InputField from '../components/Input';
import EmailAtIcon from '../assets/email-at.svg';
import PasswordIcon from '../assets/password.svg';
import Button from '../components/Button';
import EuropeLogo from '../assets/Logo/Logo';
import Form from '../components/Form';
import Supplement from '../components/Supplement';

function LoginArea() {
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');

  function handleSubmit(event) {
    alert('Welcome Back');
    event.preventDefault();
  }

  return (
    <>
      <EuropeLogo />
      <Form onSubmit={handleSubmit}>
        <BasicCard>
          <InputField
            type="email"
            placeholder="E-mail"
            src={EmailAtIcon}
            value={userEmail}
            onChange={(event) => {
              setUserEmail(event.target.value);
            }}
          />
          <InputField
            type="password"
            placeholder="Password"
            src={PasswordIcon}
            value={userPassword}
            onChange={(event) => {
              setUserPassword(event.target.value);
            }}
          />

          <Container>
            <Button>Login</Button>
          </Container>
          <Supplement>
            {"Don't have an account?"}
            <Link to="/signUp">{'Sign Up here'}</Link>
          </Supplement>
        </BasicCard>
      </Form>
    </>
  );
}
export default LoginArea;
