import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface LinkInterface {
  text: string;
  href: string;
}

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

const NavbarLinks = () => {
  return (
    <StyledUl>
      {links.map((link: LinkInterface) => {
        return (
          <li key={link.text}>
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
`;

export default NavbarLinks;
