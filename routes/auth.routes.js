import express from "express";
import { login, profile, register } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/profile/:userId", profile);

export default router;
