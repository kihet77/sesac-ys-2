const express = require("express");
const app = express();
const port = 8000;
const dotenv=require("dotenv")
const path = require("path")



dotenv.config({path: path.join(__dirname,"./config/envs/.env")});
dotenv.config({path: path.join(__dirname,`./config/envs/${process.env.NODE_ENV}.env`)});


console.log(process.env.PASSWORD);

app.get("/", (req, res) => {
    res.send("hello world");
});


app.listen(process.env.PORT, () => {
  console.log(`Server Port : ${process.env.PORT}`);
});