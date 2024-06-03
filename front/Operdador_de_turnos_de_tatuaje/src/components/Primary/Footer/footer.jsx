import { Link } from "react-router-dom";
import LogoTitile from "../header/Logo&Titile";
import { CustomFooter } from "../../../Styles/Footer/Footer";
import RedesSociales from "./RedesSociales";

export default function Footer() {
  return (
    <CustomFooter>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <LogoTitile />
      </Link>
      <RedesSociales />
    </CustomFooter>
  );
}
