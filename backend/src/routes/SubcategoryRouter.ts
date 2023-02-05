import { Router } from "express";
import SubcategoryController from "../controllers/SubcategoryController";

const router = Router();

router.post('/',
  SubcategoryController.create
);

router.get('/:id',
  SubcategoryController.getByCategoryId
);

router.patch('/:id',
  SubcategoryController.update
);

router.delete('/:id',
  SubcategoryController.delete
);

export default router;