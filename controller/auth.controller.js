import { sendError, sendResponse } from "../helper/response.js";
import { msg } from "../helper/responseText.js";
import Users from "../model/auth.model.js";

export const register = async (req, res) => {
  try {
    const { name, phone, password, email } = req.body;

    // console.log(req.body);

    if (!name || !phone || !email || !password) {
      return sendResponse(res, false, msg.required_field);
    }
    const user = await Users.findOne({ email });
    if (user) {
      return sendResponse(res, false, "User already exist");
    }

    const newUser = new Users(req.body);

    await newUser.save();

    return sendResponse(res, true, "User register successfuly");
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

    console.log(user);

    if (!user) {
      return res
        .status(400)
        .json({ status: false, message: "User not Found " });
    }

    if (user.password != password) {
      return res
        .status(400)
        .json({ status: false, message: "passwordn not valid" });
    }

    const token = await user.getAuthToken();

    return res
      .status(200)
      .json({ status: true, message: "user login ", user, token });
  } catch (error) {
    return res.status(500).json({ status: false, error });
  }
};
export const profile = async (req, res) => {
  try {
    if(!req.user){
        return sendResponse(res, false, "user not found")
    }

    return res
      .status(200)
      .json({ status: true, message: "user profile ", user:req.user });
  } catch (error) {
    return res
      .status(200)
      .json({ status: true, message: "user profile ", error });
  }
};
