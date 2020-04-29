import React from 'react';
import styled from '@emotion/styled';

const ContainerOrange = styled.div`
  display: flex;
  margin: 0;
  position: fixed;
  bottom: 5rem;
  width: 100vw;
  height: 30vh;
  justify-content: flex-end;
  align-intems: flex-start;
  background-color: #f2ac29;
  z-index: -5;
`;

const ContainerGreen = styled.div`
  background-color: #13dace;
  height: 20px;
  width: 100vw;
  z-index: -5;
  position: fixed;
`;

const Background = () => (
  <ContainerOrange>
    <ContainerGreen />
  </ContainerOrange>
);
export default Background;
