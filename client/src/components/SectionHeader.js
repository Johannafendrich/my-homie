import React from 'react';
import styled from '@emotion/styled';

const SectionMain = styled.div`
  display: flex;
  margin: 0;
  position: fixed;
  top: 2rem;
  width: 100vw;
  height: 30vh;
  padding-top: 5rem;
  align-items: flex-end;
  background-color: #f2ac29;
  z-index: -1;
`;

const SectionLine = styled.div`
  background-color: #13dace;
  height: 20px;
  width: 100vw;
  z-index: -1;
  position: fixed;
  align-intems: flex-end;
`;

const SectionHeader = () => (
  <SectionMain>
    <SectionLine />
  </SectionMain>
);
export default SectionHeader;
