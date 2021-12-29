import { StyledHeader } from "./Header.styles";
import logo from "../../assets/shared/logo.svg";
import { Button } from "../Button";

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="Logo" />
      <Button>Pre-Order Now</Button>
    </StyledHeader>
  );
};

export default Header;
export { Header };
