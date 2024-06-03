import { CustomTurn } from "../Styles/turnosStyles";
import dateNormal from "./date";

function Appointment({
  id,
  date,
  time,
  status,
  zonas: { zona, price },
  descripcion: { descripcion, urlReferencia },
  handleOnClick,
}) {
  const { day, month, year } = dateNormal(new Date(date));

  return (
    <CustomTurn key={id}>
      <p>
        Date :<br /> {`${month}/${day}/${year}`}
      </p>
      <p>
        Time:
        <br />
        {time}
      </p>
      <p>
        Status:
        <br /> <span id="status">{status}</span>
      </p>
      <p>
        Area to tattoo :<br /> {zona}
      </p>
      <p>
        Tattoo description:
        <br /> {descripcion}
      </p>
      <p>
        Reference image:
        <br />{" "}
        <img
          src={urlReferencia}
          style={{ width: "5rem", height: "5rem" }}
        ></img>
      </p>
      <p>
        Total to pay :<br /> {price}
      </p>

      <button onClick={() => handleOnClick(id)}>Cancel</button>
    </CustomTurn>
  );
}
export default Appointment;
