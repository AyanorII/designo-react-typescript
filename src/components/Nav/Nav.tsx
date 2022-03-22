import React from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";

interface NavProps {
  isNavOpen: boolean;
}

const Nav = ({ isNavOpen }: NavProps) => {
  return (
    <StyledNav isNavOpen={isNavOpen}>
      <NavLinks />
    </StyledNav>
  );
};

const StyledNav = styled.nav<NavProps>`
  background: ${props => props.theme.colors.primary.dark};
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(${props => props.isNavOpen ? "100px" : "-400px"});
  transition: transform 0.35s ease-in-out;

`;

export default Nav;
