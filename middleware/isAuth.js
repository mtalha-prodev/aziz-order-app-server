import { sendError, sendResponse } from "../helper/response.js";
import Users from "../model/auth.model.js";
import jwt from "jsonwebtoken";

export const isAuth = async (req, res, next) => {
  try {
    // console.log(req.headers);
    const token = req?.headers?.authorization?.split(" ")[1];

    if (!token) {
      return sendResponse(res, false, "Token is required");
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // console.log(decoded);
    req.user = await Users.findById(decoded._id);

    next();
  } catch (error) {
    sendError(res, error);
  }
};
