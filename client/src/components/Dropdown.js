import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const DropdownMenu = styled.select`
  border: none;
  background: none;
  cursor: pointer;
  padding: 20px;
  outline: none;
  margin-left: 10px;
  font-size: 1rem;
  color: #707070;
  flex: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-item: baseline;
  min-height: 47px;
  border: 1.5px solid #707070;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 10px 20px;
  outline: none;
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
        {data.map((item, key) => (
          <option key={key} value={item.value}>
            {item.label}
          </option>
        ))}
      </DropdownMenu>
    </Container>
  );
}

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  data: PropTypes.array.isRequired,
  src: PropTypes.object,
};

export default Dropdown;
