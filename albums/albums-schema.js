import mongoose from "mongoose";
const albumsSchema = new mongoose.Schema(
  {
    name: String,
    albumId: String,
  },
  { collection: "albums" }
);

export default albumsSchema;
