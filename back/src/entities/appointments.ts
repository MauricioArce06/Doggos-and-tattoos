import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { status } from "../interfaces/IUsers";
import { User } from "./User";
import { Zonas } from "./zonas";
import { Descripcion } from "./descripcion";

@Entity({
  name: "Turnos",
})
export class Appointments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  time: string;

  @ManyToOne(() => Zonas, (zonas) => zonas.appointments)
  @JoinColumn({ name: "zonas" })
  zonas: Zonas;

  @Column({ default: "Active" })
  status: status;

  @ManyToOne(() => User, (user) => user.appointment)
  @JoinColumn({ name: "user" })
  user: User;

  @OneToOne(() => Descripcion, (descripcion) => descripcion.appointment)
  @JoinColumn({ name: "descripcion_id" })
  descripcion: Descripcion;
}
