import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LinkInterface from "../../modules/interfaces/LinkInterface";

const links: LinkInterface[] = [
  {
    text: "Our Company",
    href: "/about",
  },
  {
    text: "Locations",
    href: "/locations",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

type Props = {
  closeMenu: () => void;
}

const NavbarLinks = ({closeMenu}: Props) => {
  return (
    <StyledUl>
      {links.map((link: LinkInterface) => {
        return (
          <li key={link.text} onClick={closeMenu}>
            <NavLink key={link.text} to={link.href}>{link.text}</NavLink>
          </li>
        )
      })}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  color: ${props => props.theme.colors.primary.light};
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  gap: 2rem;
  justify-content: space-between;
  letter-spacing: 2px;
  list-style: none;
  margin: 0;
  padding: 3rem 1.5rem;
  text-align: left;
  text-transform: uppercase;

  @media (min-width: 768px) {
    color: ${props => props.theme.colors.primary.dark};
    flex-direction: row;
    font-size: 0.875rem;
    padding: 0;
    gap: 2.625rem;
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
        background: black;
      }

      &:hover::after {
        width: 100%;
        left: 0;
      }
    }

  }

`;

export default NavbarLinks;
