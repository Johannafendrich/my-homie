import React from 'react';
import Button from '../components/Button';
import Container from '../components/Container';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Buttons',
};
export const loginButton = () => (
  <Container>
    <Button onClick={action('link to Login')}>Login</Button>
  </Container>
);

export const createAccountButton = () => (
  <Container>
    <Button onClick={action('link to Account')}>Create account</Button>
  </Container>
);

export const profileButton = () => (
  <Container>
    <Button onClick={action('link to Profile')}>To my profile</Button>
  </Container>
);

export const submitButton = () => (
  <Container>
    <Button onClick={action('link to Profile')}>Submit</Button>
  </Container>
);

export const addHomieButton = () => (
  <Container>
    <Button onClick={action('clicked')}>Add as Homie</Button>
  </Container>
);
