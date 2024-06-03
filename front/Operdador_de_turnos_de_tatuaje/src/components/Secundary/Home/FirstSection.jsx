import { CustomFirstSection } from "../../../Styles/Home";
import { Link } from "react-router-dom";
// import Login from "../Header/User/Login";
// import RegisterModal from "../Header/User/Register";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModalLog, openUserModal } from "../../../redux/reducer";
export function FirstSection() {
  // const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("userId"));--pasa a id

  const id = useSelector((state) => state.user.id);
  const dispach = useDispatch();

  const handleOnClick = () => {
    // setIsLoggedIn(true);
    dispach(openUserModal());
    dispach(openModalLog());
  };

  return (
    <CustomFirstSection>
      <div>
        <h2>Heart and Soul's Tattoo</h2>
        <p>
          Express your true self through art on your skin. In our studio, each
          tattoo is an authentic expression of your essence. Let your emotions
          guide the ink and make your heart the brush that transforms your skin
          into a masterpiece of self-expression
        </p>
        {id ? (
          <Link to="/Schedule" style={{ textDecoration: "none" }}>
            <button>Schedule a session</button>
          </Link>
        ) : (
          <button onClick={handleOnClick}>
            Register to schedule an appointment
          </button>
        )}
      </div>
      <img
        className="imageGrande"
        src="https://hips.hearstapps.com/hmg-prod/images/tattoo-pain-painful-places-body-64b699311c148.jpg?crop=0.668xw:1.00xh;0.0578xw,0&resize=2048:*"
        id="imageGrande"
      ></img>
      <img
        className="imagePequeña"
        src="https://theartcareerproject.com/wp-content/uploads/2023/09/How-to-Become-a-Tattoo-Artist.webp"
      ></img>
    </CustomFirstSection>
  );
}
