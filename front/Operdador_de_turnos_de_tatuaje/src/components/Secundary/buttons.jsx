import { Link } from "react-router-dom";
import { ButtonCustom } from "../../Styles/styles";

const Botones = () => {
  return (
    <ButtonCustom>
      <ul>
        <Link to={"/home"} style={{ textDecoration: "none" }}>
          <a>Home</a>
        </Link>
        <Link to={"/Galery"} style={{ textDecoration: "none" }}>
          <a>Galery</a>
        </Link>
        <Link to={"/About-us"} style={{ textDecoration: "none" }}>
          <a>About Us</a>
        </Link>
      </ul>
    </ButtonCustom>
  );
};

export default Botones;
