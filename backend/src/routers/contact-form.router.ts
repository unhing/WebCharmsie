import express, { Router } from "express";
import { create, list } from "../controllers/contact-form.controller";

const router: Router = express.Router();

router.post("/contacts", create);
router.get("/contacts", list);

export default router;
