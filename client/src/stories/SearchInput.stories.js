import React from 'react';
import Search from '../components/Search';
import { action } from '@storybook/addon-actions';
import SearchIcon from '../assets/search.svg';

export default {
  title: 'SearchInput',
};
export const SearchInput = () => (
  <Search
    placeholder="Find your Homie"
    src={SearchIcon}
    onClick={action('Submit your search')}
  ></Search>
);
