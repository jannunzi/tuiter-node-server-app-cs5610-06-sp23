import tuitsModel from "./tuits-model.js";

export const findAllTuits = async () => {
  const tuits = await tuitsModel.find();
  return tuits;
};

export const findTuitById = async (id) => {
  const tuit = await tuitsModel.findById(id);
  return tuit;
};

export const deleteTuit = async (id) => {
  const status = await tuitsModel.deleteOne({ _id: id });
  return status;
};

export const createTuit = async (tuit) => {
  const newTuit = await tuitsModel.create(tuit);
  return newTuit;
};

export const updateTuit = async (id, tuit) => {
  const status = await tuitsModel.updateOne({ _id: id }, tuit);
  return status;
};
