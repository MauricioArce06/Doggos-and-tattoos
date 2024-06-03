import {
  ButtonsModal,
  Modal,
} from "../../../../Styles/loginRegisterStyles/index.js";
import RegisterForm from "./RegisterForm.jsx";

export default function RegisterModal({ handleOnClickLogin, handleOnClose }) {
  return (
    <Modal style={{ top: "9rem", right: "3rem" }}>
      <h2>Create your account</h2>
      <p>
        Enter your credentials<br></br>to create your account
      </p>
      <ButtonsModal style={{ bottom: "8.5rem" }}>
        <button onClick={handleOnClickLogin}>Log In</button>
        <button onClick={handleOnClose}>X</button>
      </ButtonsModal>
      <RegisterForm />
    </Modal>
  );
}
