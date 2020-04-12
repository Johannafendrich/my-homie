import React from 'react';
import Textarea from '../components/Textarea';

export default {
  title: 'Textareas',
};

export const aboutIntroInput = () => (
  <Textarea placeholder="What should other Homies know about you?"></Textarea>
);

export const accommodationInput = () => (
  <Textarea placeholder="What can your Homie expect about the accommodation?"></Textarea>
);
