import albumsModel from "./albums-model.js";

export const createAlbum = async (album) => {
  return albumsModel.create(album);
};
