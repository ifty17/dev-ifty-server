const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;

app.use(cors());

const projects = require("./data/projects.json");

app.get("/projects", (req, res) => {
  res.send(projects);
});

app.get("/details/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedProject = projects.find((project) => project.id == id);
  console.log(selectedProject);
  res.send(selectedProject);
});

app.get("/", (req, res) => {
  res.send("Course API Running");
});

app.listen(port, () => {
  console.log("course api running on port", port);
});