import React from 'react';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';
import BottomNav from '../utils/Navigation';
import Container from '../components/Container';
import styled from '@emotion/styled';
import BasicCard from '../components/BasicCard';
import Text from '../components/Text';
import Title from '../components/Title';
import EmailIcon from '../assets/email.svg';
import AgeIcon from '../assets/age.svg';
import UserGroupIcon from '../assets/user-group.svg';
import PhoneIcon from '../assets/phone.svg';
import HobbyIcon from '../assets/heart.svg';
import ActivitiyIcon from '../assets/sun.svg';
import LanguageIcon from '../assets/language.svg';
import Form from '../components/Form';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import Textwrapper from '../components/TextWrapper';
import { AboutTag, HobbiesTag, ActivitiesTag } from '../components/Tags';
import {
  AboutTitle,
  HobbiesTitle,
  ActivitiesTitle,
  TitleWhite,
} from '../components/Title';
import Phil from '../assets/profile/Phil.jpeg';
import LocationIcon from '../assets/pin-white.svg';

const TextContainer = styled.div`
  display: flex;
  border: none;
  border-radius: 5px;
  outline: none;
  align-item: left;
  border: none;
  padding: 5px;
  margin: 5px 0px;
  min-width: 270px;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  top: 1rem;
  width: 100vw;
  padding: 4rem 0 1rem 0;
  max-width: 500px;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  align-content: flex-end;
`;

const TextBody = styled(Text)`
  color: #323338;
  line-height: 1.5;
  margin: 5px;
  font-size: 1rem;
`;
const AvatarContainer = styled.div`
  display: flex;
  height: auto;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: flex-end;
`;
const ProfileImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-size: cover;
  border: 4px solid #8645ff;
  object-fit: cover;
  background-color: white;
`;
const AddButton = styled(Button)`
  margin-top: 1rem;
  align-items: baseline;
`;

function Homie() {
  const history = useHistory();

  function handleOnClick() {
    history.push('/homies');
  }
  return (
    <>
      <Header />
      <ProfileWrapper>
        <TitleWhite>
          Hi, I am Phil
          <Textwrapper>
            <img src={LocationIcon} />
            <Text>Frankfurt, Germany</Text>
          </Textwrapper>
        </TitleWhite>
        <AvatarContainer>
          <ProfileImg src={Phil} />
        </AvatarContainer>
      </ProfileWrapper>
      <SectionHeader />

      <Header />
      <BasicCard>
        <Form>
          <AboutTitle>About</AboutTitle>
          <TextBody>
            I’m an open-minded guy. I like to spend my time with friends and
            live in a shared flat with 4 people and a lovely dog. I offer a
            separate bedroom with a double bed for two persons. Shared shower
            and separate toilet. Fresh towels and bed linen are provided. It’s
            very important that my Homies feel comfortable, so you are welcome
            to feel like home. If you have any questions, just let call me.
          </TextBody>
          <TextContainer>
            <img src={LanguageIcon} />
            <AboutTag>german</AboutTag>
            <AboutTag>dutch</AboutTag>
            <AboutTag>english</AboutTag>
          </TextContainer>
          <TextContainer>
            <img src={AgeIcon} />
            <TextBody>03/09/1986</TextBody>
          </TextContainer>
          <TextContainer>
            <img src={UserGroupIcon} />
            <TextBody>Male</TextBody>
          </TextContainer>
          <HobbiesTitle>Hobbies</HobbiesTitle>
          <TextContainer>
            <img src={HobbyIcon} />
            <HobbiesTag>my dog</HobbiesTag>
            <HobbiesTag>playing guitar</HobbiesTag>
            <HobbiesTag>watching movies</HobbiesTag>
          </TextContainer>
          <ActivitiesTitle>Activities</ActivitiesTitle>
          <TextContainer>
            <img src={ActivitiyIcon} />
            <ActivitiesTag>sports</ActivitiesTag>
            <ActivitiesTag>music</ActivitiesTag>
            <ActivitiesTag>barbeque</ActivitiesTag>
            <ActivitiesTag>party</ActivitiesTag>
          </TextContainer>
          <Title>Contact</Title>
          <TextContainer>
            <img src={PhoneIcon} />
            <TextBody>+49 157 6224 89 32</TextBody>
          </TextContainer>
          <TextContainer>
            <img src={EmailIcon} />
            <TextBody>phil-u@gmx.de</TextBody>
          </TextContainer>

          <Container>
            <AddButton onClick={handleOnClick}>
              <span>🤙🏼</span>
              Add as Homie
            </AddButton>
          </Container>
        </Form>
      </BasicCard>
      <BottomNav />
    </>
  );
}
export default Homie;
