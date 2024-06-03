import { Formik } from "formik";
import validarRegister from "../../../../helpers/validarRegister";
import form from "../../../../helpers/form";
import { CustomRegister } from "../../../../Styles/loginRegisterStyles/index.js";
import axios from "axios";
import { useDispatch } from "react-redux";
import { closeModalLog } from "../../../../redux/reducer.js";

export default function RegisterForm() {
  // const id = useSelector((state) => state.user.id);
  // const perfilPicture = useSelector((state) => state.user.perfilPicture);
  // const modalLog = useSelector((state) => state.modal.modalLog);
  const dispach = useDispatch();
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios
        .post("http://localhost:3000/user/register", values)
        .then(() => {
          dispach(closeModalLog());
          alert("User created successfully. Log in to schedule an appointment");
        });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        birthDay: "",
        nDni: "",
        perfilPicture: "",
        username: "",
        password: "",
      }}
      validate={validarRegister}
      onSubmit={handleSubmit}
      on
    >
      {({ isSubmitting, handleSubmit }) => (
        <CustomRegister>
          {form({
            label: "Name",
            type: "text",
            name: "name",
            placeholder: "John Doe",
          })}

          {form({
            label: "Email",
            type: "email",
            name: "email",
            placeholder: "example@gmail.com",
          })}

          {form({
            label: "Birth Day",
            type: "date",
            name: "birthDay",
          })}
          {form({
            label: "DNI",
            type: "number",
            name: "nDni",
          })}

          {form({
            label: "Profile photo URL",
            type: "url",
            name: "perfilPicture",
          })}

          {form({
            label: "Username",
            type: "text",
            name: "username",
            placeholder: "example",
          })}

          {form({
            label: "Password",
            type: "password",
            name: "password",
            placeholder: "********",
          })}

          <button type="submit" disabled={isSubmitting} onClick={handleSubmit}>
            Submit
          </button>
        </CustomRegister>
      )}
    </Formik>
  );
}
