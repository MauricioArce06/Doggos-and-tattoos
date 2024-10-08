import { useEffect } from "react";
import Appointment from "../../../utils/appointments";
import { FlexDivrow } from "../../../Styles/turnosStyles";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAppointments } from "../../../redux/reducer";

const backendUrl = import.meta.env.VITE_BACK_API_URL || "http://localhost:3000";

export default function Turno() {
  const id = useSelector((state) => state.user.id);
  const Navigate = useNavigate();
  const dispach = useDispatch();
  // const [turno, setTurnos] = useState([]);--> pasa a appointments
  const turno = useSelector((state) => state.appointment.userAppointments);

  useEffect(() => {
    console.log(backendUrl);
    if (!id) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must log in",
      }).then(() => Navigate("/"));
    }
    const getAppointments = async () => {
      try {
        dispach(setAppointments([]));
        await axios
          .post(`${backendUrl}/appointments/`, { userId: id })
          .then((res) => {
            // setTurnos(res.data);
            dispach(setAppointments(res.data));
          })
          .catch((error) => {
            dispach(setAppointments([]));
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getAppointments();
  }, []);

  const handleOnClick = async (turnoId, id) => {
    Swal.fire({
      title: "Do you want to cancel the appointment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios
            .put(`${backendUrl}/appointments/cancel/${turnoId}`)
            .then((res) => {
              console.log(res.data);
              // dispach(setAppointments(res.data));
              axios
                .post(`${backendUrl}/appointments`, { userId: id })
                .then((user) => {
                  console.log(user.data);
                  dispach(setAppointments([]));
                  dispach(setAppointments(user.data));
                  Swal.fire("Canceled appoitnment!", "", "success");
                });
            });
          // console.log(user.data.appointments);
          // dispach(setAppointments(user.data.appointments));
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <FlexDivrow>
      <h2>Turnos </h2>
      {turno.length > 0 ? (
        turno.map((appointment) => (
          <div key={appointment.id}>
            <Appointment
              date={appointment.date}
              time={appointment.time}
              status={appointment.status}
              zonas={appointment?.zonas}
              descripcion={appointment.descripcion}
              handleOnClick={() => handleOnClick(appointment.id, id)}
            />
          </div>
        ))
      ) : (
        <p>No appointments found</p>
      )}
    </FlexDivrow>
  );
}
