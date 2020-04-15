import React from 'react';
import { Button, ButtonSize } from '../components/Button';
import { action } from '@storybook/addon-actions';
export default {
  title: 'Buttons',
};
export const loginButton = () => (
  <ButtonSize>
    <Button onClick={action('Welcome')}>Login</Button>
  </ButtonSize>
);

export const createAccountButton = () => (
  <ButtonSize>
    <Button onClick={action('link to Account')}>Create account</Button>
  </ButtonSize>
);

export const profileButton = () => (
  <ButtonSize>
    <Button onClick={action('link to Profile')}>To my profile</Button>
  </ButtonSize>
);

export const submitButton = () => (
  <ButtonSize>
    <Button onClick={action('clicked')}>Submit</Button>
  </ButtonSize>
);

export const addHomieButton = () => (
  <ButtonSize>
    <Button onClick={action('Homie added')}>Add as Homie</Button>
  </ButtonSize>
);
