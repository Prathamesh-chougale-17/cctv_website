const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For using static files
app.use("/assets", express.static("assets"));
app.use(express.urlencoded());

//set the templete engine as pug
// app.set("view engine", "html");

//set views directory
// app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/home.html"));
});
app.get("/index", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/index.html"));
});
app.get("/blog", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/blog.html"));
});
app.get("/contact_us", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/contact_us.html"));
});
app.get("/service", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/service.html"));
});
app.get("/why", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views/why.html"));
});
// app.get("/about", (req, res) => {
//     res.send("This is my first about of express app")
// });
// app.post("/about", (req, res) => {
//     res.send("This is my post requist first about of express app")
// });
app.listen(port, () => {
  console.log(`this application started successfully on port ${port}`);
  console.log(${port));
});
