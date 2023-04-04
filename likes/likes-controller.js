import * as likesDao from "./likes-dao.js";
const LikesController = (app) => {
  const userLikesAlbum = async (req, res) => {
    const userId = req.params.uid;
    const albumId = req.params.aid;
    const like = await likesDao.userLikesAlbum(userId, albumId);
    res.json(like);
  };
  app.post("/api/users/:uid/likes/albums/:aid", userLikesAlbum);
};
export default LikesController;
