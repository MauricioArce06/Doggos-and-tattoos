import { Request, Response } from "express";
import {
  getUserByIdService,
  getUsers,
  userConfigService,
  userLoginService,
  userRegisterService,
} from "../services/userServices";
import { authCredential, newCredential } from "../services/credentialService";
import { ICredentials, IUser } from "../interfaces/IUsers";
import { Credentials } from "../entities/credential";
import { User } from "../entities/User";
import { CredentialModel, UserModel } from "../config/data-source";

export const getUser = async (req: Request, res: Response) => {
  const users = await getUsers();
  res.status(200).json(users);
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const idParseado = Number(id);
  const user: User | null = await getUserByIdService(idParseado);
  if (user) {
    res.status(200).json(user);
  } else
    res
      .status(400)
      .json({ message: `No se encontro el usuraio con el Id:${idParseado}` });
};

export const userRegister = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("Datos recibidos");
  const { username, password, name, email, birthDay, nDni, perfilPicture } =
    req.body;
  try {
    const newUser = await userRegisterService({
      name,
      email,
      birthDay,
      nDni,
      perfilPicture,
      username,
      password,
    });
    console.log("Usuario creado");
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const userLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    console.log("datos extraidos con exito");

    const userCredential: Credentials = await authCredential({
      username,
      password,
    });
    console.log("credenciales autentificadas con éxito");

    const user: User | null = await userLoginService(userCredential.id);
    res.status(200).json({
      message: `Inicion de Sesion exitoso.`,
      perfilPicture: user?.perfilPicture,
      userId: user?.id,
    });
  } catch (error) {
    res.status(400).json({ message: "Usuario inexistente" });
  }
};

export const userConfig = async (req: Request, res: Response) => {
  const { userId, name, perfilPicture } = req.body;
  try {
    await userConfigService({
      id: userId,
      name,
      perfilPicture,
    });
    res.status(201).json({ message: `Configuracion exitosa.` });
  } catch (error) {
    res.status(400).json({ message: "Error en la configuracion" });
  }
};
