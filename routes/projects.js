const express = require("express");
const router = express.Router();
const { projects } = require("../data/data.json");

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const { project_name } = projects[id];
  const { description } = projects[id];
  const { technologies } = projects[id];
  const templateData = { project_name, description, technologies };
  res.render("project", templateData);
});

module.exports = router;
