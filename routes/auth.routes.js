import express from "express";
import {
  changePassword,
  changeProfile,
  login,
  profile,
  register,
  uploadPic,
} from "../controller/auth.controller.js";
import { isAuth, isAuthoriz } from "../middleware/isAuth.js";
import { upload } from "../middleware/storage.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get(
  "/profile",
  isAuth,
  isAuthoriz(["user", "admin", "manager", "super-admin"]),
  profile
);

router.put("/update-profile", isAuth, changeProfile);
router.put("/change-password", isAuth, changePassword);
router.put("/upload-picture", isAuth, upload, uploadPic);
router.get("/user", (req, res) => {
  res
    .status(200)
    .json({
      status: true,
      message: "get user profile",
      data: { name: "june", age: 20 },
    });
});

export default router;
