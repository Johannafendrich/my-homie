import React from 'react';
import styled from '@emotion/styled';
import { getUsers } from '../api/users';
import MenuCard from './MenuCard';
import Text from './Text';
import Title from './Title';
import YogaMenu from '../assets/hobbies/yoga.jpg';
import CookingMenu from '../assets/hobbies/cooking.jpg';
import {
  Lisa,
  Tim,
  Phil,
  Ramona,
  Akin,
  Martin,
  Tina,
  Leonie,
} from '../assets/profile/ProfileImages';
import {
  Park,
  Climbing,
  Yoga,
  Dom,
  Arts,
  Skate,
  Poetry,
  Museum,
  Party,
} from '../assets/hobbies/HobbyImages';

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

const Hobbies = styled(Title)`
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
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

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
          <Arts />
          <Wrapper>
            <Lisa />
            {users.map((user) => {
              return (
                <TextWrapper key={user.id}>
                  <Hobbies>{user.hobbies}</Hobbies>
                  <Name>{user.name}</Name>
                </TextWrapper>
              );
            })}
          </Wrapper>
        </User>
        <User onClick={handleOnClick}>
          <Yoga />
          <Wrapper>
            <Tina />
            <TextWrapper>
              <Hobbies>yoga</Hobbies>
              <Name>Tina</Name>
            </TextWrapper>
          </Wrapper>
        </User>
        <User onClick={handleOnClick}>
          <Poetry />
          <Wrapper>
            <Akin />
            <TextWrapper>
              <Hobbies>poetry slam</Hobbies>
              <Name>Akin</Name>
            </TextWrapper>
          </Wrapper>
        </User>
        <User onClick={handleOnClick}>
          <Park />
          <Wrapper>
            <Leonie />
            <TextWrapper>
              <Hobbies>Singing</Hobbies>
              <Name>Leonie</Name>
            </TextWrapper>
          </Wrapper>
        </User>
        <User onClick={handleOnClick}>
          <Climbing />
          <Wrapper>
            <Ramona />
            <TextWrapper>
              <Hobbies>climbing</Hobbies>
              <Name>Ramona</Name>
            </TextWrapper>
          </Wrapper>
        </User>
      </List>

      <List>
        <MenuCard src={CookingMenu}></MenuCard>
        <User onClick={handleOnClick}>
          <Skate />
          <Wrapper>
            <Phil />
            <TextWrapper>
              <Hobbies>skating</Hobbies>
              <Name>Phil</Name>
            </TextWrapper>
          </Wrapper>
        </User>
        <User onClick={handleOnClick}>
          <Museum />
          <Wrapper>
            <Tina />
            <TextWrapper>
              <Hobbies>exhibitions</Hobbies>
              <Name>Tina</Name>
            </TextWrapper>
          </Wrapper>
        </User>
        <User onClick={handleOnClick}>
          <Party />
          <Wrapper>
            <Martin />
            <TextWrapper>
              <Hobbies>party</Hobbies>
              <Name>Martin</Name>
            </TextWrapper>
          </Wrapper>
        </User>
        <User onClick={handleOnClick}>
          <Dom />
          <Wrapper>
            <Tim />
            <TextWrapper>
              <Hobbies>architecture</Hobbies>
              <Name>Tim</Name>
            </TextWrapper>
          </Wrapper>
        </User>
      </List>
    </>
  );
};

export default HomiesGalllery;
