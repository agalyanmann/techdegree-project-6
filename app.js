const express = require("express");
const app = express();

app.use("/static", express.static("public"));
app.set("view engine", "pug");

const mainRoutes = require("./routes");
const aboutRoutes = require("./routes/about");
const projectRoutes = require("./routes/projects");

app.use(mainRoutes);
app.use("/about", aboutRoutes);
app.use("/projects", projectRoutes);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
