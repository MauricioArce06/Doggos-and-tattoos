import { Router } from "express";
import {
  cancelAppointment,
  getAppointmentById,
  getAppointments,
  newAppointment,
} from "../controllers/appointmentsControler";
import { cancelAppointmentValidation } from "../middlewares/validaciones/appointments/cancelAppointmentValidation";
import { newAppointmentValidation } from "../middlewares/validaciones/appointments/newAppointmentValidation";

const appointmentsRoute: Router = Router();

appointmentsRoute.get("/", getAppointments);
appointmentsRoute.post("/", getAppointments);
appointmentsRoute.get("/:id", getAppointmentById);
appointmentsRoute.post("/schedule", newAppointmentValidation, newAppointment);
appointmentsRoute.put(
  "/cancel/:id",
  cancelAppointmentValidation,
  cancelAppointment
);

export default appointmentsRoute;
