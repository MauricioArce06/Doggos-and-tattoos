import { Request, Response } from "express";
import { IAppointment } from "../interfaces/IUsers";
import {
  cancelAppointmentService,
  getAppointmentService,
  getAppointmentServiceById,
  newAppointmentService,
} from "../services/appointmentsService";
import { Appointments } from "../entities/appointments";
import { newZoneSerivice, zonePrice } from "../services/zonaService";
import { newDescripcion } from "../services/descripcionService";

export const getAppointments = async (req: Request, res: Response) => {
  const { userId } = req.body;
  try {
    const appointments = await getAppointmentService(userId);
    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ message: "No se encontraron turnos" });
  }
};

export const getAppointmentById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const idParseado = Number(id);
    const appointment: Appointments | null =
      await getAppointmentServiceById(idParseado);
    res.status(200).json(appointment);
  } catch (error) {
    res.status(404).json({ message: "No se encontro el turno" });
  }
};

export const newAppointment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { date, time, user, zonas, descripcion, urlReferencia } = req.body;
    const zona = await newZoneSerivice(zonas);

    console.log(descripcion);

    await zonePrice(zona);

    // console.log(zona);
    const descripcionE = await newDescripcion({ descripcion, urlReferencia });

    await newAppointmentService({
      date,
      time,
      user,
      zonas: zona,
      descripcion: descripcionE,
    });
    console.log("todo oka");

    res
      .status(201)
      .json({ message: `Turno agendado con exito para el ${date}` });
  } catch (error) {
    res.status(404).json({ message: "No se pudo crear el turno" });
  }
};

export const cancelAppointment = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { userId } = req.body;
  const idParseado = Number(id);
  const userIdParseado = Number(userId);
  try {
    await cancelAppointmentService(idParseado);
    const appointment = await getAppointmentServiceById(idParseado);
    res.status(200).json(appointment);
  } catch (error) {
    res.status(404).json({ message: "No se encontro el turno" });
  }
};
