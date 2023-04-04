import * as dao from "./albums-dao.js";

const AlbumsController = (app) => {
  const createAlbum = async (req, res) => {
    const album = req.body;
    const newAlbum = await dao.createAlbum(album);
    res.json(newAlbum);
  };
  app.post("/api/albums", createAlbum);
};

export default AlbumsController;
