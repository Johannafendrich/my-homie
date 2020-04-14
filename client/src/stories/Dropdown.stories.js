import React from 'react';
import GenderDropdown from '../components/Dropdown';
import Form from '../components/Form';

export default {
  title: 'Dropdown',
};

export const userGender = () => (
  <Form>
    <GenderDropdown />
  </Form>
);
