import React from 'react';
// import { useQuerry } from 'react-query';
// import { useParams } from 'react-router-dom';
// import { getUser } from '../api/user';
import Searchbar from '../components/Searchbar';
import SearchIcon from '../assets/search.svg';
// const [isLoading, setIsLoading] = React.useState(true);

const Search = () => {
  const [searchInput, setSearchInput] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  async function handleSearch(event) {
    const searchInput = event.target.value;
    setSearchInput(searchInput);

    const hobbies = await fetch(
      'http://localhost:8080/api/hobbies?q=${searchInput}'
    ).then((response) => response.json());
    setSearchResults(hobbies);
  }
  return (
    <Searchbar
      placeholder="Find your Homie"
      src={SearchIcon}
      onChange={handleSearch}
      searchInput={searchInput}
      searchResults={searchResults}
    />
  );
};

export default Search;
