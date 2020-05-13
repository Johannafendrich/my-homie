import React from 'react';
import styled from '@emotion/styled';
import LisaPic from './Lisa.jpeg';
import TimPic from './Tim.jpeg';
import PhilPic from './Phil.jpeg';
import RamonaPic from './Ramona.jpeg';
import AkinPic from './Akin.jpeg';
import MartinPic from './Martin.jpeg';
import TinaPic from './Tina.jpeg';
import LeoniePic from './Leonie.jpeg';

const Img = styled.img`
  display: flex;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 2.5px solid #8645ff;
  object-fit: cover;
  align-self: center;
  margin-top: 5px;
`;

export const Lisa = () => {
  return <Img src={LisaPic} />;
};

export const Tim = () => {
  return <Img src={TimPic} />;
};

export const Phil = () => {
  return <Img src={PhilPic} />;
};
export const Ramona = () => {
  return <Img src={RamonaPic} />;
};

export const Akin = () => {
  return <Img src={AkinPic} />;
};
export const Martin = () => {
  return <Img src={MartinPic} />;
};
export const Tina = () => {
  return <Img src={TinaPic} />;
};

export const Leonie = () => {
  return <Img src={LeoniePic} />;
};
