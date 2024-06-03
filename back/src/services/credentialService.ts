import { CredentialModel, UserModel } from "../config/data-source";
import ICredentialDto from "../dto/credentialDto";
import { Credentials } from "../entities/credential";
import { ICredentials } from "../interfaces/IUsers";

const newCredential = async (
  credentialData: ICredentialDto
): Promise<Credentials> => {
  try {
    // Crea las credenciales
    const { username, password } = credentialData;

    const credentialUsername: Credentials | null =
      await CredentialModel.findOne({
        where: { username: username },
        select: ["id", "username", "password"],
      });

    if (credentialUsername) {
      throw new Error("El usuario ya existe");
    }

    const credencial: Credentials =
      await CredentialModel.create(credentialData);
    const results = await CredentialModel.save(credencial);
    console.log("Credenciales creadas con éxito");

    return credencial;
  } catch (error) {
    throw new Error("No se pudieron crear las credenciales");
  }
};

const authCredential = async (crentialData: ICredentialDto) => {
  const { username, password } = crentialData;

  console.log("datos recibidos con éxito");

  const credentialUsername: Credentials | null = await CredentialModel.findOne({
    where: { username: username },
    select: ["id", "username", "password"],
  });

  console.log("usuario encontrado");

  console.log(credentialUsername);
  console.log(password);

  if (!credentialUsername) throw new Error("No se encontro el usuario");

  if (password !== credentialUsername.password)
    throw new Error("Contraseña incorrecta");
  console.log("todo oka");

  return credentialUsername;
};

const verficarCredencialesExistentes = async (crentialData: ICredentialDto) => {
  const { username, password } = crentialData;

  const credentialUsername: Credentials | null = await CredentialModel.findOne({
    where: { username: username },
    select: ["id", "username", "password"],
  });
  return credentialUsername;
};

export { newCredential, authCredential, verficarCredencialesExistentes };
