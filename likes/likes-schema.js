import mongoose from "mongoose";
const likesSchema = new mongoose.Schema(
  {
    userId: String,
    albumId: String,
  },
  { collection: "likes" }
);
export default likesSchema;
