import { Link } from "react-router-dom";
import { CustomHeader } from "../../../Styles/styles";
import LogoTitile from "./Logo&Titile";
import NavBar from "./NavBar";
import User from "./User";
// import Botones from "../buttons";
const Header = () => {
  return (
    <CustomHeader>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <LogoTitile />
      </Link>
      <NavBar />
      <User />
    </CustomHeader>
  );
};

export default Header;
