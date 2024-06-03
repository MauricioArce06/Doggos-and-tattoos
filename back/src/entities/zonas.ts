import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Appointments } from "./appointments";

@Entity("zonas")
export class Zonas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  zona: string;

  @Column({ default: 0, type: "int" })
  price: number;

  @OneToMany(() => Appointments, (appointment) => appointment.zonas)
  appointments: Appointments[];
}
