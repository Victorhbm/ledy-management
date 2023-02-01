import { Router } from "express";
import ManagerController from "../controllers/ManagerController";
import ManagerMiddleware from "../middlewares/ManagerMiddleware";

const router = Router();

router.post('/',
  ManagerMiddleware.loginValidate,
  ManagerController.login
);

export default router;