import { Formik } from "formik";
import validarLogin from "../../../../helpers/validarLogin";
import { CustomRegister } from "../../../../Styles/loginRegisterStyles/index.js";
import form from "../../../../helpers/form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../../../redux/reducer.js";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  // const { errores, setErrores } = useState({});
  // const user = useSelector((state) => state);

  const dispach = useDispatch();
  const Navigate = useNavigate();
  const backendUrl =
    import.meta.env.VITE_BACK_API_URL || "http://localhost:3000";

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.post(`${backendUrl}/user/login`, values).then((res) => {
        dispach(login(res.data));
        alert("Successful login");
        Navigate("/");
      });
    } catch (error) {
      alert("Incorrect username or password");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={validarLogin}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleSubmit }) => (
        <CustomRegister>
          {form({ label: "Username", type: "text", name: "username" })}
          {form({ label: "Password", type: "password", name: "password" })}
          <button type="submit" disabled={isSubmitting} onClick={handleSubmit}>
            Iniciar Sesión
          </button>
        </CustomRegister>
      )}
    </Formik>
  );
}
