import { Router } from "express";
import { registerUser, verifyUser, userLogin } from "../controllers/user.controller.js";

const router = Router();

router.post("/register",registerUser);
router.get("/verify/:token",verifyUser);
router.post("/login",userLogin);
 
export default router;