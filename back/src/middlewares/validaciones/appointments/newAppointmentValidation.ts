import { Request, Response, NextFunction } from "express";

export const newAppointmentValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { date, time, user, zonas } = req.body;
  if (!date || date.length === 0) {
    next({ message: "No se ingreso ninguna fecha", statusCode: 404 });
  } else if (typeof date !== "string") {
    next({
      message: "El tipo de formato de fecha es incorrecto",
      statusCode: 404,
    });
  }

  if (!time || time.length === 0) {
    next({ message: "No se ingreso ninguna horario", statusCode: 404 });
  } else if (typeof time !== "string") {
    next({
      message: "El tipo de formato de horario es incorrecto",
      statusCode: 404,
    });
  }

  if (!user) {
    next({ message: "No hay usuario", statusCode: 404 });
  } else if (typeof user !== "number") {
    next({ message: "Formato de id incorrecto", statusCode: 404 });
  }

  if (!zonas || zonas.length === 0) {
    next({ message: "No hay zonas", statusCode: 404 });
  }

  if (typeof zonas !== "string")
    next({ message: "Formato de zonas incorrecto", statusCode: 404 });
  const hoy = new Date(date);

  next();
};
