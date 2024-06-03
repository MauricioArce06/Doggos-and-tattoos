import { User } from "../entities/User";
import { Descripcion } from "../entities/descripcion";
import { Zonas } from "../entities/zonas";
import { IUser, status } from "../interfaces/IUsers";

interface IAppointmentDto {
  date: Date;
  time: string;
  user: number;
  zonas: Zonas;
  descripcion: Descripcion;
}

export default IAppointmentDto;
