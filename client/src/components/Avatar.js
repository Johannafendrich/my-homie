import React from 'react';
import styled from '@emotion/styled';
import Profile from '../assets/profile/Tina.jpeg';
import cameraIcon from '../assets/camera.svg';

const StyledProfileImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-image: url(${Profile});
  border: 4px solid #8645ff;
  background-size: cover;
  background-position: -15px 0px;
`;

const UploadImage = styled.button`
  display: flex;
  height: 25px;
  width: 25px;
  margin-left: 35px;
  position: absolute;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: white;
  outline: none;
  &:active {
    transform: translateY(1px) scale(0.9);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 20%);
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  width: 140px;
  height: auto;
  position: relative;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: flex-end;
`;

const Avatar = () => (
  <AvatarContainer>
    <UploadImage>
      <img src={cameraIcon} />
    </UploadImage>
    <StyledProfileImg />
  </AvatarContainer>
);

export default Avatar;
