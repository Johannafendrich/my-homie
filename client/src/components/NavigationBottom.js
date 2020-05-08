import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  height: 60px;
  width: 100vw;
  background-color: white;
  box-shadow: 10px 0px 15px rgba(80, 92, 98, 15%);
  margin: 0;
  padding: 0;
  position: fixed;
  bottom: 0;
  z-index: 10;
`;

const NavItem = styled(NavLink)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  max-width: 160px;
  padding: 6px 12px 8px;
  cursor: pointer;
  z-index: 50;
  fill: ${(props) => (props.active ? '#F2D22E' : '#707070')};
`;

function NavigationBottom({ links, value }) {
  return (
    <NavContainer>
      {links.map((link) => (
        <NavItem key={link.label} to={link.navLink}>
          <link.Icon active={value === link.navLink} />
        </NavItem>
      ))}
    </NavContainer>
  );
}

NavigationBottom.propTypes = {
  links: PropTypes.array,
  value: PropTypes.string,
};

export default NavigationBottom;
