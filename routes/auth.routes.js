import express from "express";
import { login, profile, register } from "../controller/auth.controller.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register",  register);
router.get("/profile", isAuth,  profile);
router.put("/update-profile", isAuth,  profile);

export default router;
