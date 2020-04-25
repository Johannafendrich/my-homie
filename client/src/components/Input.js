import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Input = styled.input`
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

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-item: left;
  border: 1.5px solid #707070;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0px;
  outline: none;
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
