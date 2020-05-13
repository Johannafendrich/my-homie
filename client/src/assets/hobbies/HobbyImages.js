import React from 'react';
import styled from '@emotion/styled';
import ParkPic from './park.jpeg';
import ClimbingPic from './climbing.jpeg';
import YogaPic from './Yoga.jpeg';
import DomPic from './dom.jpeg';
import ArtsPic from './arts.jpeg';
import SkatePic from './skate.jpeg';
import PoetryPic from './poetry.jpeg';
import PartyPic from './party.jpeg';
import MuseumPic from './museum.jpeg';

const TitleImage = styled.img`
  width: 185px;
  height: 125px;
  border-radius: 24px 24px 0 0;
`;

export const Park = () => {
  return <TitleImage src={ParkPic} />;
};

export const Climbing = () => {
  return <TitleImage src={ClimbingPic} />;
};

export const Yoga = () => {
  return <TitleImage src={YogaPic} />;
};
export const Dom = () => {
  return <TitleImage src={DomPic} />;
};

export const Arts = () => {
  return <TitleImage src={ArtsPic} />;
};
export const Skate = () => {
  return <TitleImage src={SkatePic} />;
};
export const Poetry = () => {
  return <TitleImage src={PoetryPic} />;
};

export const Party = () => {
  return <TitleImage src={PartyPic} />;
};

export const Museum = () => {
  return <TitleImage src={MuseumPic} />;
};
