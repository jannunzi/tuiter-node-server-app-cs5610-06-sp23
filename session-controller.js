const SessionController = (app) => {
  const storeInSession = (req, res) => {
    const key = req.params.key;
    const value = req.params.value;
    req.session[key] = value;
    res.send(req.session);
  };
  const getFromSession = (req, res) => {
    const key = req.params.key;
    const value = req.session[key];
    res.send(value);
  };
  const clearSession = (req, res) => {
    req.session.destroy();
    res.send(200);
  };
  app.get("/api/session/set/:key/:value", storeInSession);
  app.get("/api/session/get/:key", getFromSession);
  app.get("/api/session/clear", clearSession);
};

export default SessionController;
