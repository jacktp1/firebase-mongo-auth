import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  uid: String,
  email: String,
  name: String,
  subject1: String,
  subject2: String,
  subject3: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
