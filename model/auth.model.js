import mongoose from "mongoose";

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

export default mongoose.model("user", userSchema);
