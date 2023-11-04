const express = require("express");
const app = express();
const port = 8000;
const session = require("express-session");

//app.set("view engine", "ejs");
app.use(session({
    secret:"secret key",
    resave:false,//모든 요청마다 session을 다시 저장할거냐?
    saveUninitialized:true,//클라이언트가 처음 접속할때, 세션 초기화?
    // cookie:{
    //     httpOnly:true,
    //     maxAge:10 * 60 * 1000
    // },
    //secure:true, //https에서만 동장
}));

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/set", (req, res) => {
    console.log("1:",req.session)
    req.session.user = "kit"
    console.log("2:",req.session)
    res.send("set");
});

app.get("/get", (req, res)=>{
    console.log(req.session.user)
    res.send({user:req.session.user})
})

app.listen(port, () => {
  console.log("Server Port : ", port);
});