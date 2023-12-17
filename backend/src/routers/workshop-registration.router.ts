import express, { Router } from "express";
import { create, list } from "../controllers/workshop-registration.controller";

const router: Router = express.Router();

router.post("/workshop-registrations", create);
router.get("/workshop-registrations", list);

export default router;
