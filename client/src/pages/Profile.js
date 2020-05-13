import React from 'react';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import BottomNav from '../utils/Navigation';
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
import { AboutTag, HobbiesTag, ActivitiesTag } from '../components/Tags';
import { AboutTitle, HobbiesTitle, ActivitiesTitle } from '../components/Title';

export const Container = styled.div`
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

export const TextBody = styled(Text)`
  color: #323338;
  line-height: 1.5;
  margin: 5px;
  font-size: 1rem;
`;

function ProfilePage() {
  return (
    <>
      <Header />
      <ProfileSection />
      <Header />
      <BasicCard>
        <Form>
          <AboutTitle>About</AboutTitle>
          <TextBody>
            I love to spend my time with friends and like good food. I am living
            in a 3 room apartment. I&apos;m looking forward to showing you my
            beautiful Cologne. If you have any questions, just let me know.
          </TextBody>
          <Container>
            <img src={LanguageIcon} />
            <AboutTag>french</AboutTag>
            <AboutTag>english</AboutTag>
          </Container>
          <Container>
            <img src={AgeIcon} />
            <TextBody>03/06/1994</TextBody>
          </Container>
          <Container>
            <img src={UserGroupIcon} />
            <TextBody>Female</TextBody>
          </Container>
          <HobbiesTitle>Hobbies</HobbiesTitle>
          <Container>
            <img src={HobbyIcon} />
            <HobbiesTag>baking</HobbiesTag>
            <HobbiesTag>yoga</HobbiesTag>
            <HobbiesTag>watching movies</HobbiesTag>
          </Container>
          <ActivitiesTitle>Activities</ActivitiesTitle>
          <Container>
            <img src={ActivitiyIcon} />
            <ActivitiesTag>sightseeing</ActivitiesTag>
            <ActivitiesTag>museums</ActivitiesTag>
            <ActivitiesTag>party</ActivitiesTag>
          </Container>
          <Title>Contact</Title>
          <Container>
            <img src={PhoneIcon} />
            <TextBody>+49 157 3691 42 15</TextBody>
          </Container>
          <Container>
            <img src={EmailIcon} />
            <TextBody>tina-walters@gmail.com</TextBody>
          </Container>
        </Form>
      </BasicCard>
      <BottomNav />
    </>
  );
}
export default ProfilePage;
