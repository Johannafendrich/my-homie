import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: baseline, center;
  cursor: pointer;
  font-size: 1rem;
  color: #323338;
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
`;

const Checkmark = styled.div`
  border-radius: 50%;
  border: 1px solid #707070;
  align-items: center;
  height: 15px;
  width: 15px;
  margin-right: 8px;
  background: ${(props) => (props.checked ? '#13DACE' : 'white')};
`;

const RadioInput = ({ checked, label, value, onChange }) => {
  return (
    <Label>
      <Input type="radio" value={value} checked={checked} onChange={onChange} />
      <Checkmark checked={checked} />
      {label}
    </Label>
  );
};
export default RadioInput;

RadioInput.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
