import React from 'react';
import { Link } from 'react-router-dom';
import BasicCard from '../components/BasicCard';
import Container from '../components/Container';
import InputField from '../components/Input';
import EmailAtIcon from '../assets/email-at.svg';
import PasswordIcon from '../assets/password.svg';
import UserIcon from '../assets/user.svg';
import LocationIcon from '../assets/pin.svg';
import Button from '../components/Button';
import EuropeLogo from '../assets/Logo/Logo';
import Form from '../components/Form';
import Supplement from '../components/Supplement';

function SignUpArea() {
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [userCity, setUserCity] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    alert(`Hi ${userName}, welcome to the community`);
  }

  return (
    <>
      <EuropeLogo />
      <Form onSubmit={handleSubmit}>
        <BasicCard>
          <InputField
            type="text"
            placeholder="Name"
            src={UserIcon}
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />

          <InputField
            type="text"
            placeholder="City, country"
            src={LocationIcon}
            value={userCity}
            onChange={(event) => {
              setUserCity(event.target.value);
            }}
          />

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
            <Button>Create account</Button>
          </Container>
          <Supplement>
            {'Already have an account?'}
            <Link to="/">{'Login here'}</Link>
          </Supplement>
        </BasicCard>
      </Form>
    </>
  );
}
export default SignUpArea;
