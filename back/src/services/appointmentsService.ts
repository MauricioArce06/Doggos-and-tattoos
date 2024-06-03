import {
  AppointmentModel,
  UserModel,
  AppDataSource,
  ZonasModel,
} from "../config/data-source";
import IAppointmentDto from "../dto/appointmentDto";
import { User } from "../entities/User";
import { Appointments } from "../entities/appointments";
import { IAppointment } from "../interfaces/IUsers";
import { newZoneSerivice, zonePrice } from "./zonaService";

const getAppointmentService = async (id: number) => {
  if (id) {
    console.log(id);

    console.log(`Esto es el servicio, si llego el userid ${id}`);

    const turno: Appointments[] | null = await AppointmentModel.find({
      where: { user: { id: id } },
      relations: { zonas: true, descripcion: true },
    });
    if (turno.length == 0) throw new Error("No se encontraron turnos");
    return turno;
  } else {
    const turnos: Appointments[] = await AppointmentModel.find({
      relations: { user: true, zonas: true, descripcion: true },
    });

    if (turnos.length == 0) throw new Error("No se encontraron turnos");
    return turnos;
  }
};
const getAppointmentServiceById = async (id: number) => {
  const turno: Appointments | null = await AppointmentModel.findOne({
    relations: { user: true },
    where: { id },
  });
  return turno;
};

const newAppointmentService = async (appointmentData: IAppointmentDto) => {
  const { date, time, zonas, descripcion } = appointmentData;

  const user = await UserModel.findOneBy({
    id: appointmentData.user,
  });

  if (!user) {
    throw new Error("Usuario no encontrado");
  }

  const zona = await ZonasModel.findOne({ where: { zona: zonas.zona } });
  // console.log(zona);

  if (!zona) {
    throw new Error("Zona no encontrada");
  }

  if (!descripcion) throw new Error("No se encontro la descripción");

  console.log("datos recibidos con exito");

  const newTurno = await AppointmentModel.create({
    date,
    time,
    zonas,
    user,
    descripcion,
  });

  console.log("Turno creado con exito");

  const saveTurn = await AppointmentModel.save(newTurno);

  return saveTurn;
};

const cancelAppointmentService = async (id: number) => {
  const turnoCancelado: Appointments | null = await AppointmentModel.findOneBy({
    id,
  });

  if (turnoCancelado) {
    await AppointmentModel.update(turnoCancelado, { status: "Cancelled" });
  } else throw new Error("No se encontro el turno");
};

export {
  getAppointmentService,
  getAppointmentServiceById,
  newAppointmentService,
  cancelAppointmentService,
};
