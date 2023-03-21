import users from "./users.js";

let currentUser = null;

function UsersController(app) {
  const findAllUsers = (req, res) => {
    res.send(users);
  };
  const findUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    res.send(user);
  };
  const deleteUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    const index = users.indexOf(user);
    users.splice(index, 1);
    res.sendStatus(204);
  };
  const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: new Date().getTime() });
    res.sendStatus(201);
  };
  const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    const index = users.indexOf(user);
    users[index] = { ...user, ...req.body };
    res.sendStatus(204);
  };
  const login = (req, res) => {
    const user = req.body;
    const foundUser = users.find(
      (user) =>
        user.username === req.body.username &&
        user.password === req.body.password
    );
    if (foundUser) {
      currentUser = foundUser;
      res.send(foundUser);
    } else {
      res.sendStatus(404);
    }
  };
  const logout = (req, res) => {
    currentUser = null;
    res.sendStatus(204);
  };
  const profile = (req, res) => {
    if (currentUser) {
      res.send(currentUser);
    } else {
      res.sendStatus(404);
    }
  };
  const register = (req, res) => {
    const user = req.body;
    const foundUser = users.find((user) => user.username === req.body.username);
    if (foundUser) {
      res.sendStatus(409);
    } else {
      const newUser = { ...user, id: new Date().getTime() };
      currentUser = newUser;
      users.push(newUser);
      res.sendStatus(201);
    }
  };

  app.post("/api/users/login", login);
  app.post("/api/users/logout", logout);
  app.get("/api/users/profile", profile);
  app.post("/api/users/register", register);

  app.get("/api/users", findAllUsers);
  //   app.get("/api/users/:id", findUserById);
  app.delete("/api/users/:id", deleteUserById);
  app.post("/api/users", createUser);
  app.put("/api/users/:id", updateUser);
}

export default UsersController;
