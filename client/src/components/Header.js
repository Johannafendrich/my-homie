import React from 'react';
import styled from '@emotion/styled';
import SmallLogo from '../assets/Logo/SmallLogo';

const Title = styled.h1`
  font: 1.3rem 'Anton', sans-serif;
  color: #323338;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  margin: 0px;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 10%);
`;

const Header = () => (
  <HeaderContainer>
    <SmallLogo />
    <Title>MyHomie</Title>
  </HeaderContainer>
);

export default Header;
