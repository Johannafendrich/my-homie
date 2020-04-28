import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import InputContainer from '../components/InputContainer';

export const Input = styled.input`
  border: none;
  cursor: pointer;
  margin-left: 10px;
  min-width: 270px;
  font-size: 1rem;
  flex: 1;
  &:focus {
    outline-color: #9eaebc;
&:placeholder {
        color: #9eaebc;
  }
`;

const InputField = ({ type, placeholder, value, src, onChange }) => {
  return (
    <InputContainer>
      <img src={src} />
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  src: PropTypes.any,
  onChange: PropTypes.func,
};

export default InputField;
