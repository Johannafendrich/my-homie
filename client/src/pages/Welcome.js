import React from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BasicCard from '../components/BasicCard';
import Container from '../components/Container';
import Button from '../components/Button';
import { CologneLogo } from '../assets/Logo/Logo';
import Supplement from '../components/Supplement';
import Background from '../components/Background';
import Text from '../components/Text';
import Title from '../components/Title';
import welcomeGroupIcon from '../assets/welcomeGroup.svg';

const TextContainer = styled.div`
  display: flex;
  text-alaign: center;
  flex-flow: column nowrap;
  justify-content: center;
  align-item: center;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0px;
  outline: none;
`;

const TextBody = styled(Text)`
  color: #323338;
  line-height: 1.5;
`;
const Headline = styled(Title)`
  color: #323338;
  line-height: 1.5;
`;

function WelcomeMessage() {
  const history = useHistory();

  function handleClick() {
    history.push('/profile');
  }

  return (
    <>
      <Background />
      <CologneLogo />
      <BasicCard>
        <TextContainer>
          <Headline>Welcome to the Community</Headline>
          <TextBody>
            With MyHomie you can share an accommodation, get connected with
            other homies, discover the city like a local or find accommodations
            on your journey and get in touch with likeminded people.
          </TextBody>
          <TextBody>
            Please keep in mind that the community focus on a peaceful and
            cultural exchange of people from all different cultures.
          </TextBody>
        </TextContainer>
        <img src={welcomeGroupIcon} />
        <Container>
          <Button onClick={handleClick}>To My Profile</Button>
        </Container>
        <Supplement>
          <span>Want to complete later?</span>
          <Link to="/home">Skip for now</Link>
        </Supplement>
      </BasicCard>
    </>
  );
}
export default WelcomeMessage;
