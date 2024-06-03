import express from "express";
import router from "../routes/indexRoute";
import morgan from "morgan";
import cors from "cors";
import { Request, Response, NextFunction } from "express";

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(router);

server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = (err as any).statusCode || 500;
  res.status(statusCode).json({
    error: err.message,
  });
});

export default server;
