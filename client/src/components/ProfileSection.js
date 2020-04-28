import React from 'react';
import styled from '@emotion/styled';
import MainBackground from '../assets/background-reverse.svg';
import Avatar from '../components/Avatar';
import PlaceholderAvatar from '../assets/profile/avatarPlaceholder.svg';
import { TitleWhite } from '../components/Title';
import Textwrapper from '../components/TextWrapper';
import LocationIcon from '../assets/pin-white.svg';
import Text from '../components/Text';

const ProfileContainer = styled.div`
  display: flex;
  width: 100vw;
  margin-top: 2rem;
  padding: 1rem;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  background-image: url(${MainBackground});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ProfileSection = () => (
  <ProfileContainer>
    <TitleWhite>
      Hello, Tina Walters
      <Textwrapper>
        <img src={LocationIcon} />
        <Text>Cologne, Germany</Text>
      </Textwrapper>
    </TitleWhite>
    <Avatar src={PlaceholderAvatar} />
  </ProfileContainer>
);

export default ProfileSection;
