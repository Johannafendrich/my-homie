import React from 'react';
import styled from '@emotion/styled';
import cameraIcon from '../assets/camera.svg';
import PlaceholderAvatar from '../assets/profile/avatarPlaceholder.svg';
import useAvatar from '../utils/context/useAvatar';

const ProfileImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-size: cover;
  border: 4px solid #8645ff;
  object-fit: cover;
  background-color: white;
`;

const UploadImage = styled.button`
  display: flex;
  height: 25px;
  width: 25px;
  margin-left: 35px;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: url(${cameraIcon}) no-repeat;
  background-position: center;
  border-radius: 50%;
  border: none;
  background-color: white;
  outline: none;
  cursor: pointer;
  &:active {
    transform: translateY(1px) scale(0.9);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 20%);
  }
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
const Avatar = () => {
  const { image, setImage } = useAvatar();

  const handleImageUpload = async (event) => {
    event.preventDefault();
    const files = event.target.files;
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'bouybyw8');
    const uploadedImage = await fetch(
      'https://api.cloudinary.com/v1_1/dqbs4ljft/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );
    const file = await uploadedImage.json();
    setImage(file.secure_url);
  };

  return (
    <AvatarContainer>
      {!image ? (
        <>
          <ProfileImg src={PlaceholderAvatar} />
          <UploadImage>
            <ImageInput
              type="file"
              onChange={handleImageUpload}
              accept=".png, .jpg, .jpeg"
            />
          </UploadImage>
        </>
      ) : (
        <ProfileImg src={image} />
      )}
    </AvatarContainer>
  );
};
export default Avatar;
