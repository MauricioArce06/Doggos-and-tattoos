import { AppDataSource, PORT } from "./config";
import serverInitialize from "./server";
import "reflect-metadata";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    serverInitialize();
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
