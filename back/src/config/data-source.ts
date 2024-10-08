import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Appointments } from "../entities/appointments";
import { Credentials } from "../entities/credential";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from ".";
import { Zonas } from "../entities/zonas";
import { Descripcion } from "../entities/descripcion";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  // synchronize: true,
  ssl: true,
  // dropSchema: true,
  // logging: false,
  entities: ["dist/entities/*.js"],
  subscribers: [],
  migrations: [],
});

export const UserModel = AppDataSource.getRepository(User);
export const CredentialModel = AppDataSource.getRepository(Credentials);
export const AppointmentModel = AppDataSource.getRepository(Appointments);
export const ZonasModel = AppDataSource.getRepository(Zonas);
export const DescripcionModel = AppDataSource.getRepository(Descripcion);
