import React from 'react';
import styled from '@emotion/styled';
import MainLogo from './logo-europe.svg';
import Colognelogo from './cologneLogo.svg';

const Wrapper = styled.div`
  display: flex;
  top: 0;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 3rem;
  margin-top: 0;
  padding-top: 1rem;
`;

export const CologneLogo = () => (
  <Wrapper>
    <img src={Colognelogo} />
  </Wrapper>
);

const EuropeLogo = () => (
  <Wrapper>
    <img src={MainLogo} />
  </Wrapper>
);

export default EuropeLogo;
