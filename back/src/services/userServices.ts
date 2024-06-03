import {
  AppDataSource,
  CredentialModel,
  UserModel,
} from "../config/data-source";
import ICredentialDto from "../dto/credentialDto";
import { IUpdateDto } from "../dto/updateDto";
import IUserDto from "../dto/userDto";
import { User } from "../entities/User";
import { Credentials } from "../entities/credential";
import { IUser } from "../interfaces/IUsers";

const getUsers = async () => {
  try {
    const user = await UserModel.find({
      relations: { credential: true, appointment: true },
    });
    return user;
  } catch (error) {
    throw new Error("No se encontraron usuarios");
  }
};

const getUserByIdService = async (id: number) => {
  try {
    const user = await UserModel.findOne({
      relations: { appointment: true, credential: true },
      where: { credential: { id }, appointment: true },
    });

    return user;
  } catch (error) {
    throw new Error("No se recibió ningun id");
  }
};

const userRegisterService = async (newUserData: IUserDto) => {
  const newUser: User = UserModel.create(newUserData);
  console.log("Usuario creado");
  console.log(newUser);

  const newCredential: Credentials = await CredentialModel.create({
    username: newUserData.username,
    password: newUserData.password,
  });
  console.log("Credenciales creadas");
  newUser.credential = newCredential;
  console.log("credenciaes guardadas");

  await CredentialModel.save(newCredential);
  const results = await UserModel.save(newUser);
  console.log("usuario guardado");

  return results;
};

const userLoginService = async (credentials: number) => {
  const userLogin: User | null = await UserModel.findOneBy({
    credential: { id: credentials },
  });
  return userLogin;
};

const userConfigService = async (updateData: IUpdateDto) => {
  const { id, perfilPicture, name } = updateData;

  console.log("valores recibidos");

  const user = await UserModel.findOneBy({ id });

  if (!user) throw new Error("No se encontro el usuario");

  if (perfilPicture) user.perfilPicture = perfilPicture;

  if (name) user.name = name;
  console.log("usuario actualizado");

  UserModel.save(user);
  console.log(user);
};

const verficarDniExistente = async (dni: number) => {
  const user = await UserModel.findOneBy({ nDni: dni });
  return user;
};

export {
  getUsers,
  getUserByIdService,
  userRegisterService,
  userLoginService,
  userConfigService,
  verficarDniExistente,
};
