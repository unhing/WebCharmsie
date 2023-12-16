import express, { Router } from "express";
import {
  create,
  detail,
  list,
  paginate,
  remove,
  update,
} from "../controllers/product.controller";

const router: Router = express.Router();

router.get("/products/paginate", paginate);
router.get("/products", list);
router.get("/products/:id", detail);
router.post("/products", create);
router.put("/products/:id", update);
router.delete("/products/:id", remove);

export default router;
