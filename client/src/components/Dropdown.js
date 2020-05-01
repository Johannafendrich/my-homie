import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Container from '../components/InputContainer';

const DropdownMenu = styled.select`
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #707070;
  outline: none;
  margin-left: 5px;
  background-color: white;
  flex: 1;
  &:focus {
      outline-color: #9eaebc;
    &:placeholder {
          color: #9eaebc;
    }
`;

function Dropdown({ data, placeholder, src }) {
  const [dropdownValue, setdropdownValue] = React.useState('');

  const handleDropdown = (event) => {
    setdropdownValue(event.target.value);
  };
  return (
    <Container>
      <img src={src} />
      <DropdownMenu value={dropdownValue} src={src} onChange={handleDropdown}>
        <option value="" disabled>
          {placeholder}
        </option>
        {data.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </DropdownMenu>
    </Container>
  );
}

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  data: PropTypes.array,
  src: PropTypes.any,
};

export default Dropdown;
