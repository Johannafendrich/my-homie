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
import { getLatestUser } from '../api/users';

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
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    getLatestUser().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <>
      <Header />
      <ProfileSection />
      <Header />
      <BasicCard>
        <Form>
          <AboutTitle>About</AboutTitle>
          <TextBody>{user.about}</TextBody>

          <Container>
            <img src={LanguageIcon} />
            {user.language &&
              user.language.map((language) => (
                <AboutTag key={language}>{language}</AboutTag>
              ))}
          </Container>
          <Container>
            <img src={AgeIcon} />
            <TextBody>{user.age}</TextBody>
          </Container>
          <Container>
            <img src={UserGroupIcon} />
            <TextBody>{user.gender}</TextBody>
          </Container>
          <HobbiesTitle>Hobbies</HobbiesTitle>
          <Container>
            <img src={HobbyIcon} />
            {user.hobbies &&
              user.hobbies.map((hobby) => (
                <HobbiesTag key={hobby}>{hobby}</HobbiesTag>
              ))}
          </Container>
          <ActivitiesTitle>Activities</ActivitiesTitle>
          <Container>
            <img src={ActivitiyIcon} />
            {user.activities &&
              user.activities.map((activity) => (
                <ActivitiesTag key={activity}>{activity}</ActivitiesTag>
              ))}
          </Container>
          <Title>Contact</Title>
          <Container>
            <img src={PhoneIcon} />
            <TextBody>{user.phone}</TextBody>
          </Container>
          <Container>
            <img src={EmailIcon} />
            <TextBody>{user.email}</TextBody>
          </Container>
        </Form>
      </BasicCard>
      <BottomNav />
    </>
  );
}
export default ProfilePage;
