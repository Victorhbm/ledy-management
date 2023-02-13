import { Router } from "express";
import CustomerController from "../controllers/CustomerController";
import CustomerMiddleware from "../middlewares/CustomerMiddleware";

const router = Router();

router.post('/',
  CustomerMiddleware.validateData,
  CustomerMiddleware.checkExistingEmail,
  CustomerMiddleware.checkExistingCPF,
  CustomerController.create
);

router.get('/',
  CustomerController.getAll
);

router.get('/:id',
  CustomerController.getById
);

router.put('/:id',
  CustomerMiddleware.validateData,
  CustomerController.update
);

router.delete('/:id',
  CustomerController.delete
);

export default router;