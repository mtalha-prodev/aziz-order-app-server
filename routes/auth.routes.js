import express from "express";
import { login, profile, register } from "../controller/auth.controller.js";
import { isAuth, isAuthoriz } from "../middleware/isAuth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get(
  "/profile",
  isAuth,
  isAuthoriz(["user", "admin", "manager", "super-admin"]),
  profile
);
router.put(
  "/update-profile",
  isAuth,
  isAuthoriz(["user", "super-admin"]),

  profile
);
router.put("/update-profile", isAuth, isAuthoriz(["super-admin"]), profile);

export default router;
