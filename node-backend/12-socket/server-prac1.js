const http = require("http");
const express = require("express");
const app = express();
// 소켓이 http모듈로 생성된 서버에서만 동작
const server = http.createServer(app);
const PORT = 8000;

const cors = require("cors")
app.use(cors())

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  }
});

io.on("connection", (socket) => {
  console.log("socket id", socket.id);

  socket.on("hello", (res) => {
    console.log(res)
    socket.emit("resHello", { msg: "안녕하세요." })
  })

});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});