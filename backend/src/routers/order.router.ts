import express, { Router } from "express";
import { create, detail, list, remove, update } from "../controllers/order.controller";


const router: Router = express.Router();

router.get("/orders",list)
router.get("/orders/:id", detail)
router.post("/orders", create)
router.patch("/orders/:id", update)
router.delete("/orders/:id",remove)

export default router;