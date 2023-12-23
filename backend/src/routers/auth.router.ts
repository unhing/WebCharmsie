import express, { Router } from "express";
import { login, signup, editProfile } from "../controllers/auth.controller";
import { authenticateMiddleware } from "../middlewares/authenticate.middleware";

const router: Router = express.Router();

router.post("/auth/login", login);
router.post("/auth/signup", signup);
router.patch("/auth/profile", authenticateMiddleware, editProfile);

export default router;
