import { NextFunction, Request, Response } from "express";
import { STATUS_CODES } from "http";

export const getUserByIdValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (id) {
    if (id.length == 0)
      res.status(404).json({ message: "No se ingresó ningun id" });

    const idParseado = Number(id);
    if (!idParseado)
      res.status(404).json({ message: "Formato de id incorrecto" });

    if (typeof idParseado !== "number")
      res.status(404).json({ message: "Formato de id incorrecto" });
    if (idParseado <= 0)
      res.status(404).json({ message: "El formato de id es incorrecto" });
    next();
  } else next({ message: "No se ingresó ningun id", statusCode: 404 });
};
