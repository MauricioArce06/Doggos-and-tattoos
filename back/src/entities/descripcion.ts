import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Appointments } from "./appointments";

@Entity()
export class Descripcion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column()
  urlReferencia: string;

  @OneToOne(() => Appointments, (appointment) => appointment.id)
  @JoinColumn()
  appointment: Appointments;
}
