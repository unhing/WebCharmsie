import express, { Router } from "express";
import contactFormRouter from "./contact-form.router";
import workshopRouter from "./workshop.router";
import workshopRegistrationRouter from "./workshop-registration.router";
import authRouter from "./auth.router";
import productRouter from "./product.router";
import customerRouter from "./customer.router";
import blogRouter from "./blog.router";
import orderRouter from "./order.router";

const router: Router = express.Router();
router.use(contactFormRouter);
router.use(workshopRouter);
router.use(workshopRegistrationRouter);
router.use(authRouter);
router.use(productRouter);
router.use(customerRouter);
router.use(blogRouter);
router.use(orderRouter);

export default router;
