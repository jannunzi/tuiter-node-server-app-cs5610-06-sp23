import likesModel from "./likes-model.js";

export const userLikesAlbum = async (userId, albumId) => {
  return likesModel.create({ userId, albumId });
};
