import darkLogo from "../../assets/shared/desktop/logo-dark.png";
import lightLogo from "../../assets/shared/desktop/logo-light.png";

type Props = {
  variant: "dark" | "light";
};

const Logo = ({ variant }: Props) => {
  return variant === "dark" ? (
    <img src={darkLogo} alt="logo"  width="200px"/>
  ) : (
    <img src={lightLogo} alt="logo" width="200px" />
  );
};

export default Logo;
