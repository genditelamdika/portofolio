import NavLinks from "./NavLinks";
import logo from "../images/konoha.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Gendi Telamdika' Logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
