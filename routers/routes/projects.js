const express = require("express");
const {
  newProject,
  getProjects,
  editProject,
} = require("./../controllers/projects");

const projectsRouter = express.Router();

projectsRouter.post("/project", newProject);
projectsRouter.get("/projects", getProjects);
projectsRouter.put("/:projectid", editProject);
