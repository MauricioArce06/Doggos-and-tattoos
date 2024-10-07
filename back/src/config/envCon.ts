import dotenv from "dotenv";

dotenv.config();

const PORT: number | string = Number(process.env.PORT) || 3000;
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = Number(process.env.DB_PORT) || 5432;
const DB_USERNAME = process.env.DB_USERNAME || "test";
const DB_PASSWORD = process.env.DB_PASSWORD || "test";
const DB_NAME = process.env.DB_NAME || "test";

export { PORT, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME };
