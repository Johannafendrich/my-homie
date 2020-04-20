import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Buttons = styled.button`
  background-color: #8645ff;
  color: white;
  padding: 0.7rem;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 16%);
  text-transform: uppercase;
  font: bold 0.8rem 'Oswald', sans-serif;
  outline: none;
  cursor: pointer;

  &:active {
    transform: translateY(1px) scale(0.9);
    box-shadow: 0px 5px 10px rgba(134, 69, 255, 60%);
  }
`;

const ButtonSize = styled.div`
  display: flex;
  justify-content: center;
  > * {
    flex-basis: 50%;
  }
`;

const Button = ({ label, onClick }) => (
  <ButtonSize>
    <Buttons onClick={(event) => onClick(event)}>{label}</Buttons>
  </ButtonSize>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
