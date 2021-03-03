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

app.use((req, res, next) => {
  const err = new Error("Page Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  console.log(err);
  res.render("error");
});


app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port 3000");
});
