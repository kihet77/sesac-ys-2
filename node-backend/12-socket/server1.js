const http = require("http")
const express = require("express")
const app = express()
const server = http.createServer(app)
const PORT = 8000

const io = require("socket.io")(server)

app.set("view engine", "ejs")

app.get("/", function (req, res) {
  res.render("client1")
})


io.on("connection", (socket) => {
  //수업
  console.log("socket id", socket.id)
  socket.on("Hello", (res) => {
    console.log(res)
    socket.emit("bye", { msg: "안녕히가세요" })
  })

  socket.on("entry", (res) => {
    console.log(res) //undefined
    io.emit("notice", { msg: `${socket.id}님이 입장했습니다.` })
  })

  //실습
  socket.on("HELLO", (res) => {
    console.log(res)
    socket.emit("HI", { msg: "HI"})
  })
  socket.on("STUDY", (res) => {
    console.log(res)
    socket.emit("EASY", { msg: "EASY"})
  })
  socket.on("BYE", (res) => {
    console.log(res)
    socket.emit("GOODBYE", { msg: "GOODBYE"})
  })
})




server.listen(PORT, function () {
  console.log(`SeverOpen ${PORT}`)
})