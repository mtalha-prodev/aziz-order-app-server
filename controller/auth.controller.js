import Users from "../model/auth.model.js";

export const register = async (req, res) => {
  try {
    const { name, phone, password, email } = req.body;

    // console.log(req.body);

    if (!name || !phone || !email || !password) {
      return res
        .status(400)
        .json({ status: false, message: "all fields is required" });
    }
    const user = await Users.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ status: false, message: "User already exist" });
    }

    const newUser = new Users(req.body);

    await newUser.save();

    res
      .status(201)
      .json({ status: true, message: "User register successfuly" });
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
};

export const login = (req, res) => {
  res.send("hi new product login ");
};
export const profile = (req, res) => {
  res.send("hi new product profile");
};
