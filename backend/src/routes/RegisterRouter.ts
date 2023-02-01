import { Router } from "express";
import ManagerController from "../controllers/ManagerController";
import ManagerMiddleware from "../middlewares/ManagerMiddleware";

const router = Router();

router.post('/',
  ManagerMiddleware.registerValidate,
  ManagerMiddleware.checkEmail,
  ManagerController.register
);

export default router;