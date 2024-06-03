import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Credentials } from "./credential";
import { Appointments } from "./appointments";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  birthDay: Date;

  @Column({ type: "int", unique: true })
  nDni: number;

  @Column()
  perfilPicture: string;

  @OneToOne(() => Credentials, (credential) => credential.user, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  credential: Credentials;

  @OneToMany(() => Appointments, (appointment) => appointment.user)
  @JoinColumn()
  appointment: Appointments[];
}
