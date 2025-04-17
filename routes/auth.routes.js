import express from "express";
import { login, profile, register } from "../controller/auth.controller.js";

const router = express.Router();

router.get("/login", login);
router.post("/register", register);
router.get("/profile", profile);

export default router;
