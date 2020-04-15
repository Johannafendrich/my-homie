import React from 'react';
import styled from '@emotion/styled';
import europeLogo from '../assets/logo/europe-logo.svg';
import cologneLogo from '../assets/logo/cologne-logo.svg';
import horizontalLogo from '../assets/logo/small-logo.svg';
import logoIcon from '../assets/logo-icon.svg';

const Logo = styled.img`
  width: 170px;
  align-self: center;
`;
const LittleLogo = styled.img`
  width: 65px;
  align-self: center;
`;

const LogoIcon = styled.img`
  width: 45px;
  align-self: center;
`;

export function EuropeLogo(props) {
  return <Logo src={europeLogo} alt="Logo" {...props} />;
}

export function CologneLogo(props) {
  return <Logo src={cologneLogo} alt="Logo" {...props} />;
}

export function smallLogo(props) {
  return <LittleLogo src={horizontalLogo} alt="Logo" {...props} />;
}

export function IconLogo(props) {
  return <LogoIcon src={logoIcon} alt="Logo" {...props} />;
}
