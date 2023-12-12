import express, { Router } from "express";
import { create } from "../controllers/workshop.controller";

const router: Router = express.Router();

router.post("/workshops", create);

export default router;
