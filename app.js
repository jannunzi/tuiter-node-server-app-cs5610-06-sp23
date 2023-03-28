import express from "express";
import cors from "cors";
import TodosController from "./todos/todos-controller.js";
import MathController from "./math/math-controller.js";
import ProfileController from "./profile/profile-controller.js";
import TuiterController from "./tuiter/tuiter-controller.js";
import UsersController from "./users/users-controller.js";
import mongoose from "mongoose";

// mongoose.connect("mongodb://127.0.0.1:27017/tuiter-sp23-06");
mongoose.connect(
  "mongodb+srv://jannunzi:supersecretpassword@cluster0.l2jphh1.mongodb.net/tuiter-sp23-06?retryWrites=true&w=majority"
);

// const tuitsSchema = new mongoose.Schema(
//   {
//     text: String,
//     editing: Boolean,
//   },
//   { collection: "tuits" }
// );

// const tuitsModel = mongoose.model("Tuit", tuitsSchema);

// tuitsModel.find().then((tuits) => {
//   console.log(tuits);
// });

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

UsersController(app);
MathController(app);
ProfileController(app);
TodosController(app);
TuiterController(app);

app.get("/hello/:message", function (req, res) {
  const message = req.params.message;
  res.send(`Hello ${message}`);
});

app.listen(4000);
