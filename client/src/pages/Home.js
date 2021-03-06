import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import Search from '../components/Search';
import SearchIcon from '../assets/search.svg';
import { MainTitle } from '../components/Title';
import { TextIntro } from '../components/Text';
import BottomNav from '../utils/Navigation';
import HomiesGalllery from '../components/HomiesGallery';
import Main from '../components/Main';

const Container = styled(Main)`
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
  align-items: center;
  justify-content: center;
  scroll-snap-type: both mandatory;
  scroll-snap-align: center;
  margin-bottom: 5rem;
  padding: 0;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  margin-top: 1.5rem;
  outline: none;
  justify-content: center;
`;

const Home = () => {
  const [value, setValue] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  async function handleChange(event) {
    const value = event.target.value;
    setValue(value);

    const users = await fetch(`/api/users?q=${value}`).then((response) =>
      response.json()
    );
    setSearchResults(users);
  }

  return (
    <>
      <Header />
      <TextContainer>
        <MainTitle>Discover cities like a local</MainTitle>
        <TextIntro>
          Search for hobbies or activities you like… just everything what’s
          important for you and find your matching Homie!
        </TextIntro>
      </TextContainer>
      <SectionHeader />
      <Search
        value={value}
        placeholder="Find your Homie"
        src={SearchIcon}
        onChange={handleChange}
        searchResults={searchResults}
      />
      <Container>
        <HomiesGalllery />
      </Container>
      <BottomNav />
    </>
  );
};

export default Home;
