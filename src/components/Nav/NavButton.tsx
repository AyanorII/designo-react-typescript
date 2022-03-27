import styled from "styled-components";
import hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import close from "../../assets/shared/mobile/icon-close.svg";

interface Props {
  isNavOpen: boolean;
  toggleMenu: () => void;
}

const NavButton = ({ isNavOpen, toggleMenu }: Props) => {
  return (
    <Button
      isNavOpen={isNavOpen}
      toggleMenu={toggleMenu}
      onClick={toggleMenu}
    />
  );
};

const Button = styled.button<Props>`
  width: 24px;
  height: 20px;
  padding: 8px;
  background: url(${(props) => (props.isNavOpen ? close : hamburger)}) no-repeat
    center;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default NavButton;
