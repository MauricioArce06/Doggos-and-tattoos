// import { useState } from "react";
import { CustomUser } from "../../../Styles/styles";
import userlogo from "../../../assets/user.svg";
import Login from "../../Secundary/Header/User/Login";
import RegisterModal from "../../Secundary/Header/User/Register";
import { useEffect } from "react";
import UserModal from "../../Secundary/Header/User/UserModal";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModalLog,
  closeUserModal,
  logout,
  openModalLog,
  openUserModal,
  setAppointments,
} from "../../../redux/reducer";
import { useNavigate } from "react-router-dom";

export default function User() {
  const modal = useSelector((state) => state.modal.modal);
  const modalLog = useSelector((state) => state.modal.modalLog);
  const id = useSelector((state) => state.user.id);
  const foto = useSelector((state) => state.user.perfilPicture);
  const dispach = useDispatch();
  const Navigate = useNavigate();
  // const [user, setUser] = useState(false); -- deberia pasar a ser modal
  // const [log, setLog] = useState(false); --> deberia pasar a ser modalLog
  // const [LocalId, setLocalId] = useState(""); -> deberia pasar a ser userID

  const handleOnClick = () => {
    // setUser(true);
    dispach(openUserModal());
  };

  const handleonCLose = () => {
    // setUser(false);
    dispach(closeUserModal());
  };
  const handleCLickReg = () => {
    // setLog(true);
    dispach(openModalLog());
  };

  const handleOnCLickLog = () => {
    // setLog(false);
    dispach(closeModalLog());
    dispach(setAppointments([]));
  };

  useEffect(() => {
    // const userId = localStorage.getItem("userId");;
    // if (user.logged) {
    // setLocalId(userId);
    // setIsLoggedIn(true);
    // }
  }, []);

  const handleCloseLog = () => {
    // localStorage.removeItem("userId");
    // localStorage.removeItem("perfilPicture");
    // localStorage.removeItem("userame");
    dispach(logout());

    // setLocalId("");
    // setIsLoggedIn(false);
    // window.location.href = "/";
    Navigate("/");
  };

  return (
    <CustomUser>
      <button onClick={() => handleOnClick()}>
        {id ? (
          <img src={foto} alt="user-logo"></img>
        ) : (
          <img src={userlogo} alt="user-logo"></img>
        )}
      </button>

      {modal &&
        (id ? (
          <UserModal
            handleCloseLog={handleCloseLog}
            handleOnClose={handleonCLose}
          />
        ) : modalLog ? (
          <RegisterModal
            handleOnClickLogin={handleOnCLickLog}
            handleOnClose={handleonCLose}
          />
        ) : (
          <Login
            handleOnClickRegister={handleCLickReg}
            handleOnClose={handleonCLose}
          />
        ))}
    </CustomUser>
  );
}
