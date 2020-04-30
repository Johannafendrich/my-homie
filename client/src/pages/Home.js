import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import Search from '../components/Search';
import SearchIcon from '../assets/search.svg';
import { MainTitle } from '../components/Title';
import { TextIntro } from '../components/Text';
import MenuCard from '../components/MenuCard';
import BottomNav from '../utils/Navigation';
import YogaImage from '../assets/hobbies/yoga.jpg';
import Cooking from '../assets/hobbies/cooking.jpg';
import { TitleWhite } from '../components/Title';

const Title = styled(TitleWhite)`
  position: absolute;
  z-index: 3;
  margin: 0;
  padding: 0;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  margin-top: 2rem;
  outline: none;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  border: none;
  justify-content: center;
  outline: none;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
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
      <Search placeholder="Find your Homie" src={SearchIcon} />
      <CardWrapper>
        <CardContainer>
          <Title>Hobbies</Title>
          <MenuCard src={YogaImage}></MenuCard>
        </CardContainer>
        <CardContainer>
          <Title>Activities</Title>
          <MenuCard src={Cooking}></MenuCard>
        </CardContainer>
      </CardWrapper>
      <BottomNav />
    </>
  );
}
export default Home;
