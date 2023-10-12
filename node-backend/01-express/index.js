const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname + "/static"))

app.get("/", function (req, res) {
  res.send("hello express");
});

app.get("/test", function (req, res){
    console.log(__dirname)
    res.sendFile(__dirname + "/index.html")
})

app.get("/ejs", function (req, res){
    res.render("index.ejs")
})

app.get("/kit", function (req, res){
  res.render("kit.ejs", {
    name:"kiseon",
    product: ["운동화", "후드집업", "스웨터"]
  })
})


app.listen(PORT, function () {
  console.log(`server open ${PORT}`);
});

//