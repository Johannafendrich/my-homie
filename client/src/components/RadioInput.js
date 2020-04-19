import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
  outline: none;
`;
const Label = styled.label`
  display: flex;
  align-items: start;
  flex-direction: row;
  align-items: center;
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
  height: 18px;
  width: 18px;
  margin-right: 8px;
  color: yellow;
  background: ${(props) => (props.checked ? '#13DACE' : 'white')};
`;

const RadioInput = ({ checked, label, value, onChange }) => {
  return (
    <Container>
      <Label>
        <Input
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <Checkmark checked={checked} />
        {label}
      </Label>
    </Container>
  );
};
export default RadioInput;

RadioInput.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
