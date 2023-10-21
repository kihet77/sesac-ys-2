const express = require("express")
const app = express()
const PORT = 8000

app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("index")
})

app.post("/sgin", function(req, res){
    res.send("성공")
})

app.post("/validation", function(req, res){
    res.send("Validation 성공")
})



app.listen(PORT, function(){
    console.log(`SeverOpen ${PORT}`)
})