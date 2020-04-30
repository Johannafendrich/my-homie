import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const InputContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding: 2px;
  margin: 5px 2px;
  outline: none;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  min-width: 300px;
  height: auto;
  margin-top: 0.4rem;
  border-radius: 1.5rem;
  color: #323338;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 16%);
`;

const Img = styled.img`
  width: 300px;
  height: auto;
  border-radius: 1.5rem;
  object-fit: cover;
  position: relative;
`;

const MenueCard = ({ src, alt }) => (
  <InputContainer>
    <Card>
      <Img src={src} alt={alt} />
    </Card>
  </InputContainer>
);

MenueCard.propTypes = {
  title: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.any,
};

export default MenueCard;
