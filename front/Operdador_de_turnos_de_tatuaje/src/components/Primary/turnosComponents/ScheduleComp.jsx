import { useSelector } from "react-redux";
import { CustomSchedule } from "../../../Styles/turnosStyles/CustomSchedule";
import ScheduleForm from "../../Secundary/turnosComponentes/turno.jsx/ScheduleForm";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";

export default function ScheduleComp() {
  const id = useSelector((state) => state.user.id);
  const Navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must log in",
      }).then(() => Navigate("/"));
    }
  });
  return (
    <CustomSchedule>
      <div>
        <h2> Schedule a Turn</h2>
        <ScheduleForm />
      </div>
    </CustomSchedule>
  );
}
