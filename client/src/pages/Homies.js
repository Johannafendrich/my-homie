import React from 'react';
import styled from '@emotion/styled';
import { MainTitle } from '../components/Title';
import Header from '../components/Header';
import SectionHeader from '../components/SectionHeader';
import { TextIntro } from '../components/Text';
import BottomNav from '../utils/Navigation';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  margin-top: 1.5rem;
  outline: none;
  justify-content: center;
`;

function UnderConstruction() {
  return (
    <>
      <Header />
      <TextContainer>
        <MainTitle>
          <span>🤙🏼 </span>
          UNDER CONSTRUCTION<span> 🤙🏼</span>
        </MainTitle>
        <TextIntro>COMING SOON!</TextIntro>
        <TextIntro>...and then you can chat with yourHomie</TextIntro>
      </TextContainer>
      <SectionHeader />
      <BottomNav />
    </>
  );
}
export default UnderConstruction;
