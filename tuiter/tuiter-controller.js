import tuits from "./tuits.js";

function TuiterController(app) {
  const findAllTuits = (req, res) => {
    res.send(tuits);
  };
  const findTuitById = (req, res) => {
    const id = parseInt(req.params.id);
    const tuit = tuits.find((tuit) => tuit.id === id);
    res.send(tuit);
  };
  const deleteTuitById = (req, res) => {
    const id = parseInt(req.params.id);
    const tuit = tuits.find((tuit) => tuit.id === id);
    const index = tuits.indexOf(tuit);
    tuits.splice(index, 1);
    res.sendStatus(204);
  };
  const createTuit = (req, res) => {
    const tuit = req.body;
    tuits.push({ ...tuit, id: new Date().getTime() });
    res.sendStatus(201);
  };
  const updateTuit = (req, res) => {
    const id = parseInt(req.params.id);
    const tuit = tuits.find((tuit) => tuit.id === id);
    const index = tuits.indexOf(tuit);
    tuits[index] = { ...tuit, ...req.body };
    res.sendStatus(204);
  };
  app.get("/api/tuits", findAllTuits);
  app.get("/api/tuits/:id", findTuitById);
  app.delete("/api/tuits/:id", deleteTuitById);
  app.post("/api/tuits", createTuit);
  app.put("/api/tuits/:id", updateTuit);
}

export default TuiterController;
