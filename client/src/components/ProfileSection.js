import React from 'react';
import styled from '@emotion/styled';
import Avatar from '../components/Avatar';
import PlaceholderAvatar from '../assets/profile/avatarPlaceholder.svg';
import { TitleWhite } from '../components/Title';
import Textwrapper from '../components/TextWrapper';
import LocationIcon from '../assets/pin-white.svg';
import Text from '../components/Text';
import SectionHeader from './SectionHeader';

const ProfileWrapper = styled.div`
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

const ProfileSection = () => (
  <>
    <ProfileWrapper>
      <TitleWhite>
        Hello, Tina Walters
        <Textwrapper>
          <img src={LocationIcon} />
          <Text>Cologne, Germany</Text>
        </Textwrapper>
      </TitleWhite>
      <Avatar src={PlaceholderAvatar} />
    </ProfileWrapper>
    <SectionHeader />
  </>
);

export default ProfileSection;
