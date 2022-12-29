const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8090;
const BASE_URI =
  "mongodb+srv://usaiddmin:admin12345@mycluster.ugu2k48.mongodb.net/test";

mongoose
  .connect(BASE_URI)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

const user = {
  fname: "Hammad",
};
app.get("/", (rek, res) => {
  res.render("index", { firstName: "Hammad" });
});

app.listen(PORT, () => {
  console.log(`Your Server Runing at Port${PORT}`);
});
