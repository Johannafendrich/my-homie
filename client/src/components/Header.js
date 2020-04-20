import React from 'react';
import styled from '@emotion/styled';
import SmallLogo from '../assets/Logo/SmallLogo';
import Title from './Title';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 65px;
  margin: 0;
  padding: 0;
  background-color: white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 10%);
`;

export const Header = () => (
  <HeaderContainer>
    <SmallLogo />
    <Title>MyHomie</Title>
  </HeaderContainer>
);

export default Header;
