import React from 'react';
import MultiSelectInput from '../components/MultiSelectInput';

export default {
  title: 'MultiSelectInput',
};

export const Hobbies = () => {
  const [hobbies, setHobbies] = React.useState(['soccer', 'drinking']);

  return (
    <MultiSelectInput
      value={hobbies}
      onChange={setHobbies}
      placeholder={'Press enter to add your hobbies'}
    />
  );
};

export const Activities = () => {
  const [activities, setActivities] = React.useState(['cooking', 'citytour']);

  return (
    <MultiSelectInput
      value={activities}
      onChange={setActivities}
      placeholder={'Press enter to add your favorite activities'}
    />
  );
};

export const Languages = () => {
  const [language, setLanguage] = React.useState(['german', 'english']);

  return (
    <MultiSelectInput
      value={language}
      onChange={setLanguage}
      placeholder={'Press enter to add your languages'}
    />
  );
};
