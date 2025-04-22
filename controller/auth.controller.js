import {
  hashPassword,
  sendError,
  sendResponse,
  sendToken,
} from "../helper/response.js";
import { msg } from "../helper/responseText.js";
import Users from "../model/auth.model.js";

export const register = async (req, res) => {
  try {
    const { name, phone, password, email } = req.body;

    if (!name || !phone || !email || !password) {
      return sendResponse(res, false, msg.required_field);
    }
    const user = await Users.findOne({ email });
    if (user) {
      return sendResponse(res, false, "User already exist");
    }

    const data = {
      ...req.body,
      role: "user",
      password: await hashPassword(password),
    };

    const newUser = new Users(data);
    await newUser.save();
    return sendToken(res, newUser, "user register");
  } catch (error) {
    sendError(res, error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return sendResponse(res, false, msg.required_field);
    }
    const user = await Users.findOne({ email });

    if (!user) {
      return sendResponse(res, false, msg.not_found);
    }

    const isMatch = await user.isPassMatch(password);

    if (!isMatch) {
      return sendResponse(res, false, "password not valid");
    }

    return sendToken(res, user, "user login");
  } catch (error) {
    return res.status(500).json({ status: false, error });
  }
};
export const profile = async (req, res) => {
  try {
    if (!req.user) {
      return sendResponse(res, false, msg.not_found);
    }

    return sendResponse(res, false, "user profile ", req.user);
  } catch (error) {
    return res
      .status(200)
      .json({ status: true, message: "user profile ", error });
  }
};
