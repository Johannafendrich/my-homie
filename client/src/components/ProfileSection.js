import React from 'react';
import styled from '@emotion/styled';
import Avatar from './Avatar';
import { TitleWhite } from '../components/Title';
import Textwrapper from '../components/TextWrapper';
import LocationIcon from '../assets/pin-white.svg';
import Text from '../components/Text';
import SectionHeader from './SectionHeader';
import { getLatestUser } from '../api/users';

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

const ProfileSection = () => {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    getLatestUser().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <>
      <ProfileWrapper>
        <TitleWhite>
          Hi, {user.name}
          <Textwrapper>
            <img src={LocationIcon} />
            <Text>{user.city}</Text>
          </Textwrapper>
        </TitleWhite>
        <Avatar />
      </ProfileWrapper>
      <SectionHeader />
    </>
  );
};
export default ProfileSection;
