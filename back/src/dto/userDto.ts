import { Credentials } from "../entities/credential";
import { ICredentials } from "../interfaces/IUsers";
import ICredentialDto from "./credentialDto";

interface IUserDto {
  name: string;
  email: string;
  birthDay: Date;
  nDni: number;
  perfilPicture: string;
  username: string;
  password: string;
}

export default IUserDto;
