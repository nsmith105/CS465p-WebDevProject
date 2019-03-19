const express = require("express");
const app = express();
var router = express.Router();
  
var path = __dirname + "/views/";

app.use(express.static('views'))
app.use('/images', express.static('views'))

app.use("/",router);
express.static("/views/images/", router);

  
router.get("/",function(req, res){
  res.sendFile(path + "index.html");
});
  
router.get("/scoreboard",function(req, res){
  res.sendFile(path + "scoreboard.html");});
  
router.get("/game",function(req, res){
  res.sendFile(path + "game.html");
});

router.get("/about",function(req, res){
  res.sendFile(path + "about.html")
})
  
app.use("*",function(req, res){
  res.send("Error 404: Not Found!");
});
  
app.listen(3000,function(){
  console.log("Server running at Port 3000");
});