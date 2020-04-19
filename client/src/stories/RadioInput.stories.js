import React from 'react';
import RadioInput from '../components/RadioInput';

export default {
  title: 'Radio Input',
};

export const Radio = () => {
  const [answer, setAnswer] = React.useState(null);
  return (
    <>
      <RadioInput
        label="Yes"
        value="yes"
        checked={answer === 'yes'}
        onChange={(event) => setAnswer(event.target.value)}
      />
      <RadioInput
        label="No"
        value="no"
        checked={answer === 'no'}
        onChange={(event) => setAnswer(event.target.value)}
      />
    </>
  );
};
