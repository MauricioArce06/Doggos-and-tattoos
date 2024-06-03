import { Request, Response, NextFunction } from "express";
import {
  authCredential,
  verficarCredencialesExistentes,
} from "../../../services/credentialService";
import { verficarDniExistente } from "../../../services/userServices";

export const userRegisterValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password, name, email, birthDay, nDni, perfilPicture } =
    req.body;
  const credenciales = await verficarCredencialesExistentes({
    username,
    password,
  });
  const DniExistente = await verficarDniExistente(nDni);

  if (credenciales)
    next({ message: "Credenciales ya existente", statusCode: 400 });
  if (!username || username.length === 0)
    next({ message: "No se ingreso ningun username", statusCode: 404 });
  if (!password || password.length === 0)
    next({ message: "No se ingreso ninguna password", statusCode: 404 });

  if (typeof password !== "string")
    next({ message: "Fomarto de contraseña incorrecto", statusCode: 400 });

  if (!name || name.length === 0)
    next({ message: "No se ingreso ningun nombre", statusCode: 404 });
  if (!email || email.length === 0)
    next({ message: "No se ingreso ningun email", statusCode: 404 });
  if (!birthDay)
    next({ message: "No se ingresó ninguna fecha", statusCode: 404 });

  if (DniExistente) {
    next({ message: "DNI ya existente", statusCode: 400 });
  }
  if (!nDni || nDni.length === 0)
    next({ message: "No se ingresó ningun DNI", statusCode: 404 });
  if (typeof nDni !== "number")
    next({ message: "Formato de DNI incorrecto", statusCode: 404 });

  if (!perfilPicture || perfilPicture.length === 0)
    next({ message: "No se ingresó ninguna URL de imagen", statusCode: 404 });
  if (typeof perfilPicture !== "string")
    next({ message: "Tipo de dato incorrecto", statusCode: 404 });

  // Si ninguna de las condiciones anteriores se cumple, continúa con el siguiente middleware
  next();
};
