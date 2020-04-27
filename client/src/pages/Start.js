import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Logo from '../assets/Logo/big-europe.svg';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding-bottom: 10rem;
  flex-grow: 1;
  margin: 0;
  background-color: white;
`;

const Start = () => (
  <Wrapper>
    <Link to="/login">
      <img src={Logo} />
    </Link>
  </Wrapper>
);

export default Start;
