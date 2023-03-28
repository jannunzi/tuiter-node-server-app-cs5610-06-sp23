import mongoose from "mongoose";
import tuitsSchema from "./tuits-schema.js";
const tuitsModel = mongoose.model("tuits", tuitsSchema);
export default tuitsModel;
