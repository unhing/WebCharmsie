import express, { Router } from "express";
import { create, list, remove } from "../controllers/contact-form.controller";

const router: Router = express.Router();

router.post("/contacts", create);
router.get("/contacts", list);
router.delete("/contacts/:id", remove);

export default router;
