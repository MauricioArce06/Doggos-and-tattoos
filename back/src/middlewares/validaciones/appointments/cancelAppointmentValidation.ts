import { Request, Response, NextFunction } from "express";

export const cancelAppointmentValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { id } = req.params;
  const idParseado = Number(id);
  if (!id) next({ message: "No se ingresó ningun id", statusCode: 400 });
  if (typeof idParseado !== "number")
    next({
      message: "El formato de id ingresado es incorrecto",
      statusCode: 400,
    });
  next();
};
