import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Listagem de usuarios");

  response.json(["Fabricio", "Thiago", "Pedro", "Daniel", "Jonas"]);
});

app.listen(3333);
