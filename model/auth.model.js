import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  phone: String,

  create_at: {
    type: Date,
    default: Date.now,
  },
  update_at: Date,
});

userSchema.methods.getAuthToken = async function () {
  return await jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
};

export default mongoose.model("user", userSchema);
