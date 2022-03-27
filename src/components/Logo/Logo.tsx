import styled from 'styled-components';
import darkLogo from "../../assets/shared/desktop/logo-dark.png";
import lightLogo from "../../assets/shared/desktop/logo-light.png";

type LogoProps = {
  variant: "dark" | "light";
};

const Logo = ({ variant }: LogoProps) => {
  return variant === "dark" ? (
    <Img src={darkLogo} alt="logo"  width="200px"/>
  ) : (
    <Img src={lightLogo} alt="logo" width="200px" />
  );
};

export default Logo;

const Img = styled.img`
  @media (min-width: 768px) {
    grid-area: logo;
    justify-self: start;
  }
`;
