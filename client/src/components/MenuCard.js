import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Card = styled.div`
  display: flex;
  text-align: center;
  margin-right: 1rem;
  background: white;
  border-radius: 1.5rem;
  height: 260px;
  object-fit: cover;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 16%);
`;

const Img = styled.img`
  width: 320px;
  border-radius: 1.5rem;
`;

const MenuCard = ({ src, alt }) => (
  <Card>
    <Img src={src} alt={alt} />
  </Card>
);

MenuCard.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.any,
};

export default MenuCard;
