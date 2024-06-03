import { NextFunction, Request, Response } from "express";

export const userLoginValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;
  if (!username)
    res.status(404).json({ message: "No se ingresó ningun username" });
  if (username.lenght == 0)
    res.status(404).json({ message: "No se ingresó ningun username" });
  if (typeof username != "string")
    res.status(404).json({ message: "Formato de username incorrecto" });

  if (!password)
    res.status(404).json({ message: "No se ingresó ninguna contraseña" });
  if (password.lenght == 0)
    res.status(404).json({ message: "No se ingresó ninguna contraseña" });
  if (typeof password !== "string")
    res.status(404).json({ message: "Formato password incorrecto" });

  next();
};
