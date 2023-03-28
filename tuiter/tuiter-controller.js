// import tuits from "./tuits.js";
import * as tuitsDao from "./tuits-dao.js";

function TuiterController(app) {
  const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits();
    res.send(tuits);
  };
  const findTuitById = async (req, res) => {
    const id = req.params.id;
    // const tuit = tuits.find((tuit) => tuit.id === id);
    const tuit = await tuitsDao.findTuitById(id);
    res.send(tuit);
  };
  const deleteTuitById = async (req, res) => {
    const id = req.params.id;
    // const tuit = tuits.find((tuit) => tuit.id === id);
    // const index = tuits.indexOf(tuit);
    // tuits.splice(index, 1);
    const status = await tuitsDao.deleteTuit(id);
    res.json(status);
  };
  const createTuit = async (req, res) => {
    const tuit = req.body;
    // tuits.push({ ...tuit, id: new Date().getTime() });
    const newTuit = await tuitsDao.createTuit(tuit);
    res.json(newTuit);
  };
  const updateTuit = async (req, res) => {
    const id = req.params.id;
    // const tuit = tuits.find((tuit) => tuit.id === id);
    // const index = tuits.indexOf(tuit);
    // tuits[index] = { ...tuit, ...req.body };
    const status = await tuitsDao.updateTuit(id, req.body);
    res.json(status);
  };
  app.get("/api/tuits", findAllTuits);
  app.get("/api/tuits/:id", findTuitById);
  app.delete("/api/tuits/:id", deleteTuitById);
  app.post("/api/tuits", createTuit);
  app.put("/api/tuits/:id", updateTuit);
}

export default TuiterController;
