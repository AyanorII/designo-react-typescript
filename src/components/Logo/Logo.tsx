import styled from "styled-components";
import { NavLink } from "react-router-dom";
import darkLogo from "../../assets/shared/desktop/logo-dark.png";
import lightLogo from "../../assets/shared/desktop/logo-light.png";

type LogoProps = {
  variant: "dark" | "light";
};

const Logo = ({ variant }: LogoProps) => {
  return (
    <StyledLogo to="/">
      <img
        src={variant === "dark" ? darkLogo : lightLogo}
        alt="logo"
        width="200px"
      />
    </StyledLogo>
  );
};

export default Logo;

const StyledLogo = styled(NavLink)`
  @media (min-width: 768px) {
    grid-area: logo;
    justify-self: start;
  }
`;
