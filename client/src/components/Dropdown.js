import styled from '@emotion/styled';
import React from 'react';
import InputContainer from '../components/InputContainer';
import UserGroupIcon from '../assets/user-group.svg';

const Dropdown = styled.select`
  border: none;
  background: none;
  cursor: pointer;
  padding: 20px;
  outline: none;
  margin-left: 10px;
  font-size: 1rem;
  color: #707070;
  width: 260px;
`;

const GenderDropdown = () => {
  return (
    <Dropdown>
      <InputContainer>
        <img src={UserGroupIcon} alt="gender" />;
      </InputContainer>
      <option default="0" disabled selected>
        Gender
      </option>
      <option value="1">Female</option>
      <option value="2">Male</option>
      <option value="3">Other</option>
    </Dropdown>
  );
};
export default GenderDropdown;
