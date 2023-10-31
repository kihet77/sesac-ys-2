const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");


  
//   app.get("/register", function (req, res) {
//     console.log(req.query);
//     res.send(req.query);
//   });
  


router.get("/", controller.main)
router.post("/login", controller.login)
router.get("/register", controller.register)

module.exports = router;