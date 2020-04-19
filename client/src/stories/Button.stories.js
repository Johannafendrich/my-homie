import React from 'react';
import Button from '../components/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Buttons',
};
export const loginButton = () => (
  <Button onClick={action('link to Login')} label="Login" />
);

export const createAccountButton = () => (
  <Button onClick={action('link to Account')} label="Create account" />
);

export const profileButton = () => (
  <Button onClick={action('link to Profile')} label="To my profile" />
);

export const submitButton = () => (
  <Button onClick={action('clicked')} label="Submit" />
);

export const addHomieButton = () => (
  <Button onClick={action('clicked')} label="Add as Homie" />
);
