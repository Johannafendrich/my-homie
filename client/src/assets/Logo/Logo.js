import React from 'react';
import styled from '@emotion/styled';
import MainLogo from './logo-europe.svg';

const Wrapper = styled.div`
  display: flex;
  top: 0;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 3rem;
  margin-top: 0;
  padding-top: 1rem;
`;

const EuropeLogo = () => (
  <Wrapper>
    <img src={MainLogo} />
  </Wrapper>
);

export default EuropeLogo;
