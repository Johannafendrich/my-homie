import React from 'react';
import Textarea from '../components/Textarea';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Textareas',
  decorators: [withKnobs],
};

export const aboutIntroInput = () => (
  <Textarea
    placeholder="What should other Homies know about you?"
    value={text('')}
  ></Textarea>
);

export const accommodationInput = () => (
  <Textarea
    placeholder="What can your Homie expect about the accommodation?"
    value={text('')}
  ></Textarea>
);
