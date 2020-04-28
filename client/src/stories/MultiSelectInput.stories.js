import React from 'react';
import MultiSelectInput from '../components/MultiSelectInput';
import HobbyIcon from '../assets/heart.svg';
import ActivitiyIcon from '../assets/sun.svg';
import LanguageIcon from '../assets/language.svg';

export default {
  title: 'MultiSelectInput',
};

export const Hobbies = () => {
  const [hobbies, setHobbies] = React.useState(['soccer', 'drinking']);

  return (
    <MultiSelectInput
      value={hobbies}
      onChange={setHobbies}
      src={HobbyIcon}
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
      src={ActivitiyIcon}
      placeholder={'Press enter to add activities'}
    />
  );
};

export const Languages = () => {
  const [language, setLanguage] = React.useState(['german', 'english']);

  return (
    <MultiSelectInput
      value={language}
      onChange={setLanguage}
      src={LanguageIcon}
      placeholder={'Press enter to add your languages'}
    />
  );
};
