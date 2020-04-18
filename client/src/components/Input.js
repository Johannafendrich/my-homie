import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Input = styled.input`
  border: none;
  cursor: pointer;
  margin-left: 10px;
  font-size: 1rem;
  flex: 1;
  &:focus {
    outline-color: #9eaebc;
&:placeholder {
        color: #9eaebc;
  }
`;

export const InputContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content flex-start;
  align-item: baseline;
  border: 1.5px solid #707070;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 10px 20px;
  outline: none;
`;

const InputField = ({ type, placeholder, value, src }) => {
  return (
    <InputContainer>
      <img src={src} />
      <Input type={type} placeholder={placeholder} value={value} />
    </InputContainer>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  src: PropTypes.any,
};

export default InputField;
