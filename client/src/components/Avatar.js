import React from 'react';
import styled from '@emotion/styled';
import PlaceholderAvatar from '../assets/profile/avatarPlaceholder.svg';
import PropTypes from 'prop-types';

const ProfileImg = styled.img`
  min-height: 100px;
  width: 100px;
  border-radius: 50%;
  background: url(${PlaceholderAvatar}) no-repeat;
  background-size: cover;
  border: 4px solid #8645ff;
  object-fit: cover;
  background-color: white;
`;

const ImageInput = styled.input`
  display: flex;
  height: 20px;
  width: 20px;
  opacity: 0%;
   position relative;
   border-radius: 50%;
  border: none;
  focus {
    outline: none;
  }
  overflow: hidden;
`;

const AvatarContainer = styled.div`
  display: flex;
  height: auto;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: flex-end;
`;
const Avatar = (onChange) => {
  return (
    <>
      <AvatarContainer>
        <ImageInput
          type="file"
          onChange={onChange}
          accept=".png, .jpg, .jpeg"
        />
        <ProfileImg src="https://res.cloudinary.com/dqbs4ljft/image/upload/v1588503708/uyaqo55cn1brdosoiwgu.jpg" />
      </AvatarContainer>
    </>
  );
};
Avatar.propTypes = {
  onChange: PropTypes.func,
};

export default Avatar;
