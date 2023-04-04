import mongoose from "mongoose";
import albumsSchema from "./albums-schema.js";
const albumsModel = mongoose.model("albums", albumsSchema);
export default albumsModel;
