import { alphanumerico } from "../types/alphanum";
import { status } from "../types/status";

interface IUser {
  id: number;
  name: string;
  email: string;
  birthDay: Date;
  nDni: string;
  perfilPicture: string;
  credenciales: ICredentials["id"];
}

interface IAppointment {
  id: number;
  date: Date;
  time: string;
  userId: IUser["id"];
  zonas: IZonas["id"];
  status: status;
}

interface ICredentials {
  id: number;
  username: alphanumerico;
  password: alphanumerico;
}

interface IZonas {
  id: number;
  zona: string;
  price: number;
}

export { IUser, IAppointment, ICredentials, status };
