import { ButtonsModal, Modal } from "../../../../Styles/loginRegisterStyles";
import { Link } from "react-router-dom";

export default function UserModal({ handleCloseLog, handleOnClose }) {
  return (
    <Modal style={{ right: "5rem" }}>
      <ButtonsModal>
        <h2>User</h2>
        <button onClick={handleOnClose}>X</button>
      </ButtonsModal>
      <div className="UserModalStyle">
        <Link to={"/mis_turnos"} style={{ textDecoration: "none" }}>
          <button>My turns</button>
        </Link>
        <Link to={"/Schedule"} style={{ textDecoration: "none" }}>
          <button>Schedule a turn</button>
        </Link>
        <button onClick={handleCloseLog}>Log out</button>
      </div>
    </Modal>
  );
}
