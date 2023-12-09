import express, { Router } from "express";
import { create } from "../controllers/workshop-registration.controller";

const router: Router = express.Router();

router.post("/workshop-registrations", create);

export default router;
