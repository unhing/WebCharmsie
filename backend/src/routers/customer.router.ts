import express, { Router } from "express";
import {
  detail,
  paginate,
  remove,
  update,
} from "../controllers/customer.controller";

const router: Router = express.Router();

router.get("/customers", paginate);
router.get("/customers/:id", detail);
router.put("/customers/:id", update);
router.delete("/customers/:id", remove);

export default router;
