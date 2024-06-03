export const validarTurno = (values) => {
  let errors = {};
  if (!values.date) {
    errors.date = "Date is required";
  }
  console.log(values);
  let hoy = new Date();
  let fechaSeleccionada = new Date(values.date);

  if (fechaSeleccionada == hoy) errors.date = "Date cannot be today";
  else if (fechaSeleccionada < hoy) errors.date = "Date cannot be past";

  if (!values.time) {
    errors.time = "Time is required";
  }
  if (!values.zonas) {
    errors.zonas = "Zone is required";
  }
  if (!values.descripcion) {
    errors.descripcion = "Description is required";
  }
  if (!values.urlReferencia) {
    errors.urlReferencia = "Reference Image URL is required";
  }

  if (Object.keys(errors).length === 0) {
    // Submit the form

    console.log("Form submitted:", values);
  }
  console.log(errors);
  return errors;
};
