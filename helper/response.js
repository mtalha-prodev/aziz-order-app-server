export const sendResponse = (res, status, msg, user, token) => {
  res
    .status(status ? 200 : 400)
    .json({ status: status, message: msg, user, token });
};
export const sendError = (res, error) => {
  res.status(500).json({ status: false, message: error });
};
