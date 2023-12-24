import express, { Router } from "express";
import { create, detail, list, remove, update } from "../controllers/workshop-registration.controller";

const router: Router = express.Router();

router.post("/workshop-registrations", create);
router.get("/workshop-registrations", list);
router.get("/workshop-registrations/:id", detail);
router.patch("/workshop-registrations/:id", update);
router.delete("/workshop-registrations/:id", remove);

export default router;
