import express, { Router } from "express";
import { create } from "../controllers/contact-form.controller";

const router: Router = express.Router();

router.post("/contact", create);

export default router;
