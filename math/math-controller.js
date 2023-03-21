function MathController(app) {
  app.get("/add/:a/:b", function (req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`${a} + ${b} = ${a + b}`);
  });
  app.get("/subtract/:a/:b", function (req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`${a} - ${b} = ${a - b}`);
  });
  app.get("/multiply/:a/:b", function (req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`${a} * ${b} = ${a * b}`);
  });
  app.get("/divide/:a/:b", function (req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`${a} / ${b} = ${a / b}`);
  });
}

export default MathController;
