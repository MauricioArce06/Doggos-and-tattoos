import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Credentials {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ select: false })
  password: string;

  @OneToOne(() => User, (user) => user.credential, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn()
  user: User;
}
