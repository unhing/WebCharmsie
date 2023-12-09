import express, { Router } from "express";
import contactFormRouter from "./contact-form.router";
import workshopRouter from "./workshop.router";
import workshopRegistrationRouter from "./workshop-registration.router";

const router: Router = express.Router();
router.use(contactFormRouter);
router.use(workshopRouter);
router.use(workshopRegistrationRouter);

export default router;
