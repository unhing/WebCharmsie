import express, { Router } from "express";
import { create } from "../controllers/contact-form.controller";

const router: Router = express.Router();

router.post("/contact-forms", create);

export default router;
