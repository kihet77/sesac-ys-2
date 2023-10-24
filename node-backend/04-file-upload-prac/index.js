const express = require("express");
const multer = require("multer");

//[내장 라이브러리] path는 파일 경로를 받았은때, 그 조작을 도와준다.(multer이 빼먹은 확장자 추춘, multer이 마음대로 바꾼 파일 이름 추출)
const path = require("path");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(__dirname + "/uploads"))

const upload = multer({
    dest: "uploads/", 
});

const uploadDetail = multer({
    storage:multer.diskStorage({
        destination(req, file, done){
            done(null, "uploads/")
        },
        filename: function(req, file, done){
            const ext = path.extname(file.originalname)
            const baseName = path.basename(file.originalname)
            const fileName = baseName + "_" + Date.now() + ext
           
            done(null,fileName)
        }
    })
})


app.get("/", function (req, res) {
    res.render("index");
});

app.post("/upload", uploadDetail.single("userfile"), function(req, res){
   // res.send("up")
    res.render("result",{
        src: req.file.path,
        id: req.body.id,
        pw: req.body.pw,
        name: req.body.name,
        age: req.body.age,
    })
})

app.post("/upload/dynamic", uploadDetail.single("userfile"), function(req, res){
     res.send({
         src: req.file.path,
         id: req.body.id,
         pw: req.body.pw,
         name: req.body.name,
         age: req.body.age,
     })
 })

app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
});