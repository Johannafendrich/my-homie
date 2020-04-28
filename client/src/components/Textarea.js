import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const TextareaInput = styled.textarea`
border: 1.5px solid #707070;
border-radius: 5px;
cursor: pointer;
padding: 5px;
margin: 10px 0px;
min-width: 270px;
font-size: 1rem;
flex: 1;
&:focus {
  outline-color: #9eaebc;
&:placeholder {
      color: #9eaebc;
}
`;

const Textarea = ({ placeholder, value, onChange }) => (
  <TextareaInput
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  ></TextareaInput>
);
export default Textarea;

Textarea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
