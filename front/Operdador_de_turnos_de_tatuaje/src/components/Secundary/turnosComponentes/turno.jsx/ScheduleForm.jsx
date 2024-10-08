import { Field, Formik } from "formik";
import form from "../../../../helpers/form";
import { validarTurno } from "../../../../helpers/validarTurno";
import { CustomRegister } from "../../../../Styles/loginRegisterStyles";
import axios from "axios";
import { useSelector } from "react-redux";
const backendUrl = import.meta.env.VITE_BACK_API_URL || "http://localhost:3000";

export default function ScheduleForm() {
  const userId = useSelector((state) => state.user.id);
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // let userId = localStorage.getItem("userId");---> pasa a id

      const { date } = values;

      const formattedDate = new Date(date);
      const mm = String(formattedDate.getMonth() + 1).padStart(2, "0");
      const dd = String(formattedDate.getDate() + 1).padStart(2, "0");
      const yyyy = formattedDate.getFullYear();
      const formattedDateString = `${mm}/${dd}/${yyyy}`;

      values.date = formattedDateString;

      if (!userId) throw new Error("User not logged in");

      delete values.userId;

      await axios
        .post(`${backendUrl}/appointments/schedule`, {
          ...values,
          user: Number(userId),
        })
        .then(() => {
          alert(`Appointment created successfully for ${formattedDateString}`);
        });
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        date: "",
        time: "",
        descripcion: "",
        urlReferencia: "",
      }}
      validate={validarTurno}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleSubmit }) => (
        <CustomRegister>
          {form({ label: "Date", type: "date", name: "date", pattern: "" })}
          {form({ label: "Time", type: "time", name: "time" })}
          {/* {form({ label: "Zone", type: "text", name: "zonas" })} */}
          <div>
            <label>Select a zone:</label>
            <div>
              <Field as="select" name="zonas">
                <option value="">Select an option</option>
                <option value="Head">Head</option>
                <option value="Neck">Neck</option>
                <option value="Back">Back</option>
                <option value="Legs">Legs</option>
                <option value="Feet">Feet</option>
                <option value="Arms">Arms</option>
                <option value="Chest">Chest</option>
                <option value="Abdomen">Abdomen</option>
              </Field>
            </div>
          </div>

          {form({ label: "Description", type: "text", name: "descripcion" })}
          {form({
            label: "Refenrence Image",
            type: "Url",
            name: "urlReferencia",
          })}

          <button type="submit" disabled={isSubmitting} onClick={handleSubmit}>
            Schedule
          </button>
        </CustomRegister>
      )}
    </Formik>
  );
}
