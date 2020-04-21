import React from 'react';
import styled from '@emotion/styled';

const SVG = styled.svg`
  stroke: #707070;
  strokewidth: 2;
  strokelinecap: round;
  strokelinejoin: round;
  fill: none;
  width: 16px;
  height: 16px;
  margin-left: 8px;
  cursor: pointer;
`;

const CloseIcon = () => {
  return (
    <SVG viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
    </SVG>
  );
};
export default CloseIcon;
