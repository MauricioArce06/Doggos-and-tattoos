import {
  ButtonsModal,
  Modal,
} from "../../../../Styles/loginRegisterStyles/index.js";
import LoginForm from "./LoginForm";

export default function Login({ handleOnClickRegister, handleOnClose }) {
  return (
    <Modal style={{ top: "10rem", right: "3rem" }}>
      <h2>Welcome back!</h2>
      <p>
        Enter your credentials<br></br> to access your account
      </p>
      <ButtonsModal style={{ bottom: "8.5rem" }}>
        <button onClick={handleOnClickRegister}>Register</button>
        <button onClick={handleOnClose}>X</button>
      </ButtonsModal>
      <LoginForm className="form" />
    </Modal>
  );
}
