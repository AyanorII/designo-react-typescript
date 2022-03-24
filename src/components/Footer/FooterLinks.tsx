import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

type Props = {};

const FooterLinks = (props: Props) => {
  return <StyledUl>
    <li>
      <NavLink to="/about">Our company</NavLink>
    </li>
    <li>
      <NavLink to="/locations">Locations</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
  </StyledUl>;
};

export default FooterLinks;

const StyledUl = styled.ul`
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.primary.light}25;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  margin-top: 2rem;
  padding-block: 2rem 2.5rem;
  width: 100%;

  a {
    color: ${(props) => props.theme.colors.primary.light};
    font-size: 0.9375rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
