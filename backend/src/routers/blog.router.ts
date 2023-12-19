import express, { Router } from "express";
import {create, 
        list, 
        detail, 
        update, 
        remove} from "../controllers/blog.controller"

const router: Router = express.Router();

router.get("/blogs",list)
router.get("/blogs/:id", detail)
router.post("/blogs", create)
router.put("/blogs/:id", update)
router.delete("/blogs/:id",remove)

export default router;