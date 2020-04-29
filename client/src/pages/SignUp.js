import React from 'react';
import { useMutation } from 'react-query';
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
import addUser from '../api/homies';
import Background from '../components/Background';

function SignUpArea() {
  const [email, setUserEmail] = React.useState('');
  const [password, setUserPassword] = React.useState('');
  const [name, setUserName] = React.useState('');
  const [city, setUserCity] = React.useState('');
  const [createNewUser, { error }] = useMutation(addUser);

  async function handleSubmit(event) {
    event.preventDefault();
    await createNewUser({ email, password, name, city });
    alert(`Hi ${name}, welcome to the community`);
  }

  return (
    <>
      <Background />
      <EuropeLogo />
      <Form onSubmit={handleSubmit}>
        {error && <span>{error.message}</span>}
        <BasicCard>
          <InputField
            type="text"
            placeholder="Name"
            src={UserIcon}
            value={name}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />

          <InputField
            type="text"
            placeholder="City, country"
            src={LocationIcon}
            value={city}
            onChange={(event) => {
              setUserCity(event.target.value);
            }}
          />

          <InputField
            type="email"
            placeholder="E-mail"
            src={EmailAtIcon}
            value={email}
            onChange={(event) => {
              setUserEmail(event.target.value);
            }}
          />
          <InputField
            type="password"
            placeholder="Password"
            src={PasswordIcon}
            value={password}
            onChange={(event) => {
              setUserPassword(event.target.value);
            }}
          />

          <Container>
            <Button>Create account</Button>
          </Container>
          <Supplement>
            <span>Already have an account?</span>
            <Link to="/">Login here</Link>
          </Supplement>
        </BasicCard>
      </Form>
    </>
  );
}
export default SignUpArea;
