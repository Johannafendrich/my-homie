import React from 'react';
import MultiSelectInput from '../components/MultiSelectInput';

export default {
  title: 'MultiSelectInput',
};

export const Hobbies = () => {
  const [hobbies, setHobbies] = React.useState(['soccer', 'drinking']);

  return <MultiSelectInput value={hobbies} onChange={setHobbies} />;
};
