function ProfileController(app) {
  app.get("/profile/:name", function (req, res) {
    const name = req.params.name;
    const profile = {
      name: name,
      age: 20,
      salary: 10000,
    };
    res.send(profile);
  });
  app.get("/login", function (req, res) {
    res.send("Login");
  });
  app.get("/register", function (req, res) {
    res.send("Register");
  });
}

export default ProfileController;
