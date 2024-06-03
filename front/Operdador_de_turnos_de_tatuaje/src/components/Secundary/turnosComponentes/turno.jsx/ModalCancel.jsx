import { CustomCancelModal } from "../../../../Styles/turnosStyles/CustomCancelModal";

export default function ModalCancel() {
  return (
    <CustomCancelModal>
      <img
        src="https://images.vexels.com/media/users/3/153978/isolated/preview/483ef8b10a46e28d02293a31570c8c56-icono-de-trazo-de-color-de-senal-de-advertencia.png"
        alt="warning.png"
      ></img>
      <h1>Are you sure you want to cancel the turn?</h1>
      <p>caution, this action cannot be undone</p>
      <div>
        <button>Cancel Appointment</button>
        <button>Leave Appointment</button>
      </div>
    </CustomCancelModal>
  );
}
