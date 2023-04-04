import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: { type: String },
    age: Number,
    salary: { type: Number, default: 100000 },
    role: { type: String, default: "USER", enum: ["USER", "ADMIN", "FACULTY"] },
  },
  {
    collection: "users",
  }
);
export default usersSchema;
