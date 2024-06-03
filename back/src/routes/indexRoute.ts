import { Router } from "express";
import userRoute from "./userRouter";
import appointmentsRoute from "./appointmentsRouter";

const router = Router();

router.use("/user", userRoute);
router.use("/appointments", appointmentsRoute);

export default router;
