import React from 'react';
import Button from '../components/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Buttons',
};
export const loginButton = () => (
  <Button onClick={action('link to Login')}>Login</Button>
);

export const createAccountButton = () => (
  <Button onClick={action('link to Account')}>Create account</Button>
);

export const profileButton = () => (
  <Button onClick={action('link to Profile')}>To my profile</Button>
);

export const submitButton = () => (
  <Button onClick={action('clicked')}>Submit</Button>
);

export const addHomieButton = () => (
  <Button onClick={action('clicked')}>Add as Homie</Button>
);
