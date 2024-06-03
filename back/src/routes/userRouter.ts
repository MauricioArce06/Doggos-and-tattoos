import { Router } from "express";
import server from "../server/server";
import { userRegisterValidation } from "../middlewares/validaciones/user/userValidation";
import {
  getUser,
  getUserById,
  userConfig,
  userLogin,
  userRegister,
} from "../controllers/userController";
import { getUserByIdValidation } from "../middlewares/validaciones/user/getUserById";
import { userLoginValidation } from "../middlewares/validaciones/user/userLoginValidation";

const userRoute: Router = Router();

userRoute.get("/", getUser);
userRoute.get("/:id", getUserByIdValidation, getUserById);
userRoute.post("/register", userRegisterValidation, userRegister);
userRoute.post("/login", userLoginValidation, userLogin);
userRoute.patch("/config", userConfig);

export default userRoute;
