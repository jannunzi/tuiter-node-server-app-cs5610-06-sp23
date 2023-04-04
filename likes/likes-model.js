import mongoose from "mongoose";
import likesSchema from "./likes-schema.js";
const likesModel = mongoose.model("likes", likesSchema);
export default likesModel;
