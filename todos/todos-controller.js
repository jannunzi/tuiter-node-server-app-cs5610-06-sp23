const todos = [
  { id: 1, title: "Todo 1" },
  { id: 2, title: "Todo 2" },
  { id: 3, title: "Todo 3" },
];

function TodosController(app) {
  const findAllTodos = (req, res) => {
    res.send(todos);
  };
  const findTodoById = (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find((todo) => todo.id === id);
    res.send(todo);
  };

  app.get("/todos", findAllTodos);
  app.get("/todos/:id", findTodoById);
}

export default TodosController;
