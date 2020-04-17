import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

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
`;

const NavItem = styled.li`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  max-width: 160px;
  padding: 6px 12px 8px;
  cursor: pointer;
  fill: ${(props) => (props.active ? '#F2D22E' : '#F2D22E')};
`;

function NavigationBottom({ links, active, onItemClick }) {
  return (
    <NavContainer>
      {links.map((link) => (
        <NavItem
          key={link.label}
          active={active === link.label}
          onClick={() => onItemClick(link.label)}
        >
          <link.Icon active={active === link.label} />
        </NavItem>
      ))}
    </NavContainer>
  );
}

NavigationBottom.propTypes = {
  links: PropTypes.array,
  active: PropTypes.string,
  onItemClick: PropTypes.func,
};

export default NavigationBottom;
