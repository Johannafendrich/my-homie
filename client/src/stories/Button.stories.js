import React from 'react';
import styled from '@emotion/styled';
import Button from '../components/Button';
import { action } from '@storybook/addon-actions';

const ButtonSize = styled.div`
  display: flex;
  justify-content: center;
  > * {
    flex-basis: 50%;
  }
`;

export default {
  title: 'Buttons',
};
export const loginButton = () => (
  <ButtonSize>
    <Button onClick={action('link to Login')}>Login</Button>
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
    <Button onClick={action('clicked')}>Add as Homie</Button>
  </ButtonSize>
);
