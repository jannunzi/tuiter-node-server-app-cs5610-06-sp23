import mongoose from "mongoose";
const tuitsSchema = new mongoose.Schema(
  {
    text: String,
    editing: Boolean,
  },
  { collection: "tuits" }
);
export default tuitsSchema;
