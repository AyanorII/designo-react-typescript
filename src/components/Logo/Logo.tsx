import darkLogo from "../../assets/shared/desktop/logo-dark.png";
import lightLogo from "../../assets/shared/desktop/logo-light.png";

type LogoProps = {
  variant: "dark" | "light";
};

const Logo = ({ variant }: LogoProps) => {
  return variant === "dark" ? (
    <img src={darkLogo} alt="logo"  width="200px"/>
  ) : (
    <img src={lightLogo} alt="logo" width="200px" />
  );
};

export default Logo;
