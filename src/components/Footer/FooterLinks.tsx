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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  padding-block: 2rem 2.5rem;
  width: 100%;

  a {
    color: ${(props) => props.theme.colors.primary.light};
    font-size: 0.9375rem;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    width: auto;
    justify-self: end;
    gap: 2.625rem;
    grid-area: links;
  }

  @media (min-width: 1024px) {
    a {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0%;
        height: 2px;
        transition: all 0.4s;
        background: white;
      }

      &:hover::after {
        width: 100%;
        left: 0;
      }
    }
  }
`;
