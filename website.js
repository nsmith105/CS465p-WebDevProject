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
  
app.use("*",function(req, res){
  res.send("Error 404: Not Found!");
});
$(function() {
  var userids =
    "3125964;7469625;8537370;8525793;8550389;8537351;7429009;8540694;8529267;8538329;8030256;8538080;8535715;8559510;8538112;8522223;8709661;7992142;8535690;8235600;8533138;8538605;8532460;8525172";
  var num = userids.split(";").length;
  $.getJSON(
    "https://api.stackexchange.com/2.2/users/" +
      userids +
      "?order=desc&sort=reputation&site=stackoverflow",
    function(data) {
      for (var i = 0; i < num; i++) {
        $("#socreboard tbody").append(
          "<tr> <td>" +
            (i + 1) +
            "</td><td><img class='avatar' src='" +
            data.items[i].profile_image +
            "'/>" +
            data.items[i].display_name +
            "</td><td>" +
            data.items[i].reputation +
            "</td></tr>"
        );
      }
    }
  );
});

  
app.listen(3000,function(){
  console.log("Server running at Port 3000");
});