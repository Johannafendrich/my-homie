import React from 'react';
import styled from '@emotion/styled';
import MenuCard from './MenuCard';
import YogaMenu from '../assets/hobbies/yoga.jpg';
import Museum from '../assets/hobbies/museum.jpeg';
import Lisa from '../assets/profile/Lisa.jpeg';
import Tim from '../assets/profile/Tim.jpeg';
import Phil from '../assets/profile/Phil.jpeg';
import Ramona from '../assets/profile/Ramona.jpeg';
import Akin from '../assets/profile/Akin.jpeg';
import Martin from '../assets/profile/Martin.jpeg';
import Tina from '../assets/profile/Tina.jpeg';
import Leonie from '../assets/profile/Leonie.jpeg';
import Park from '../assets/hobbies/park.jpeg';
import Climbing from '../assets/hobbies/climbing.jpeg';
import YogaImage from '../assets/hobbies/Yoga.jpeg';
import Dom from '../assets/hobbies/dom.jpeg';
import Arts from '../assets/hobbies/arts.jpeg';
import CookingMenu from '../assets/hobbies/cooking.jpg';
import Skate from '../assets/hobbies/skate.jpeg';
import Poetry from '../assets/hobbies/poetry.jpeg';
import Party from '../assets/hobbies/party.jpeg';
import Text from './Text';
import Title from './Title';

const List = styled.div`
  display: flex;
  width: 100vw;
  flex-wrap: nowrap;
  overflow: scroll;
  scroll-snap-type: both mandatory;
  scroll-snap-align: center;
  margin: 5px;
  padding: 1rem;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  margin-right: 1rem;
  background: white;
  border-radius: 1.5rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 16%);
`;

const TitleImage = styled.img`
  width: 185px;
  height: 125px;
  border-radius: 24px 24px 0 0;
`;

const Name = styled(Text)`
  display: flex;
  color: #323338;
  text-transform: uppercase;
  margin: 0;
  padding: 2px;
`;

const Content = styled(Title)`
  display: flex;
  color: #323338;
  font-size: 1.3rem;
  margin: 0;
  padding: 10px;
  word-wrap: break-word;
`;

const TextWrapper = styled.span`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
`;

const Img = styled.img`
  display: flex;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 2.5px solid #8645ff;
  object-fit: cover;
  align-self: center;
  margin-top: 5px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
`;

const HomiesGalllery = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  function handleOnClick() {
    alert('Lets get in touch');
    setIsLoading(true);
  }
  if (isLoading) {
    return (
      <div>
        We will be with you shortly <span>🤙🏼</span>
      </div>
    );
  }
  return (
    <>
      <List>
        <MenuCard src={YogaMenu}></MenuCard>
        <User onClick={handleOnClick}>
          <TitleImage src={Arts} />
          <Wrapper>
            <Img src={Lisa} />
            <TextWrapper>
              <Content>arts</Content>
              <Name>Lisa</Name>
            </TextWrapper>
          </Wrapper>
        </User>
        <User onClick={handleOnClick}>
          <TitleImage src={YogaImage} />
          <Wrapper>
            <Img src={Tina} />
            <TextWrapper>
              <Content>yoga</Content>
              <Name>Tina</Name>
            </TextWrapper>
          </Wrapper>
        </User>
        <User onClick={handleOnClick}>
          <TitleImage src={Poetry} />
          <Wrapper>
            <Img src={Akin} />
            <TextWrapper>
              <Content>poetry slam</Content>
              <Name>Akin</Name>
            </TextWrapper>
          </Wrapper>
        </User>
        <User onClick={handleOnClick}>
          <TitleImage src={Park} />
          <Wrapper>
            <Img src={Leonie} />
            <TextWrapper>
              <Content>Singing</Content>
              <Name>Leonie</Name>
            </TextWrapper>
          </Wrapper>
        </User>
        <User onClick={handleOnClick}>
          <TitleImage src={Climbing} />
          <Wrapper>
            <Img src={Ramona} />
            <TextWrapper>
              <Content>climbing</Content>
              <Name>Ramona</Name>
            </TextWrapper>
          </Wrapper>
        </User>
      </List>

      <List>
        <MenuCard src={CookingMenu}></MenuCard>
        <User onClick={handleOnClick}>
          <TitleImage src={Skate} />
          <Wrapper>
            <Img src={Phil} />
            <TextWrapper>
              <Content>skating</Content>
              <Name>Phil</Name>
            </TextWrapper>
          </Wrapper>
        </User>
        <User onClick={handleOnClick}>
          <TitleImage src={Museum} />
          <Wrapper>
            <Img src={Tina} />
            <TextWrapper>
              <Content>exhibitions</Content>
              <Name>Tina</Name>
            </TextWrapper>
          </Wrapper>
        </User>
        <User onClick={handleOnClick}>
          <TitleImage src={Party} />
          <Wrapper>
            <Img src={Martin} />
            <TextWrapper>
              <Content>party</Content>
              <Name>Martin</Name>
            </TextWrapper>
          </Wrapper>
        </User>
        <User onClick={handleOnClick}>
          <TitleImage src={Dom} />
          <Wrapper>
            <Img src={Tim} />
            <TextWrapper>
              <Content>architecture</Content>
              <Name>Tim</Name>
            </TextWrapper>
          </Wrapper>
        </User>
      </List>
    </>
  );
};

export default HomiesGalllery;
