import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { getUsers } from '../api/users';
import MenuCard from './MenuCard';
import Text from './Text';
import YogaMenu from '../assets/hobbies/yoga.jpg';
import CookingMenu from '../assets/hobbies/cooking.jpg';

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

const Name = styled(Text)`
  display: flex;
  color: #323338;
  text-transform: uppercase;
  margin: 0;
  padding: 2px;
`;

const Hobbies = styled.h3`
  display: flex;
  color: #323338;
  font-size: 1.3rem;
  margin: 0;
  padding: 5px;
  word-wrap: break-word;
  overflow-x: auto;
  white-space: nowrap;
  width: 150px;
`;
const Activities = styled.h3`
  display: flex;
  color: #323338;
  font-size: 1.3rem;
  margin: 0;
  padding: 5px;
  word-wrap: break-word;
  overflow-x: auto;
  white-space: nowrap;
  width: 150px;
`;

const TextWrapper = styled.span`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
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

const Hobby = styled.span`
  margin: 0px 4px;
`;

const Activity = styled.span`
  margin: 0px 4px;
`;
const BackgroundImage = styled.img`
  width: 185px;
  height: 120px;
  border-radius: 24px 24px 0 0;
  margin-bottom: 4px;
`;

const ProfileImg = styled.img`
  height: 74px;
  width: 74px;
  border-radius: 50%;
  background-size: cover;
  border: 3px solid #8645ff;
  object-fit: cover;
  background-color: white;
`;

const HomiesGalllery = () => {
  const history = useHistory();
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  function handleOnClick() {
    history.push(`/homie`);
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
        {users.map((user) => {
          return (
            <User key={user.id} onClick={handleOnClick}>
              <BackgroundImage src={user.image} />
              <Wrapper>
                <ProfileImg src={user.avatar} />
                <TextWrapper>
                  <Hobbies>
                    {user.hobbies &&
                      user.hobbies.map((hobby) => (
                        <Hobby key={hobby}>{hobby}</Hobby>
                      ))}
                  </Hobbies>
                  <Name>{user.name}</Name>
                </TextWrapper>
              </Wrapper>
            </User>
          );
        })}
      </List>

      <List>
        <MenuCard src={CookingMenu}></MenuCard>
        {users.map((user) => {
          return (
            <User key={user.id} onClick={handleOnClick}>
              <BackgroundImage src={user.image} />
              <Wrapper>
                <ProfileImg src={user.avatar} />
                <TextWrapper key={user.id}>
                  <Activities>
                    {user.activities &&
                      user.activities.map((activity) => (
                        <Activity key={activity}>{activity}</Activity>
                      ))}
                  </Activities>
                  <Name>{user.name}</Name>
                </TextWrapper>
              </Wrapper>
            </User>
          );
        })}
      </List>
    </>
  );
};

export default HomiesGalllery;
