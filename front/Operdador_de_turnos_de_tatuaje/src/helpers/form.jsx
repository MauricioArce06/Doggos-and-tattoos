import { Field } from "formik";
import { CustomErrorMessage } from "../Styles/loginRegisterStyles";

export default function form({ label, type, name, placeholder, pattern }) {
  return (
    <label>
      {label}:
      <div>
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          pattern={pattern}
        />
      </div>
      <div>
        <CustomErrorMessage name={name} component="div" />
      </div>
    </label>
  );
}
