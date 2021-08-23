//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//this "app.set('view engine', 'ejs');" redirect oure views folder to list page
app.set('view engine', 'ejs');

app.get("/", function(req, res) {

  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  //switch function we use when more then 4 variable is our code
  switch (currentDay) {
    case 0:
      day = "sunday";
      break;
    case 1:
      day = "monday";
      break;
    case 2:
      day = "tuesday";
      break;
    case 3:
      day = "wednesday";
      break;
    case 4:
      day = "thurday";
      break;
    case 5:
      day = "firday";
      break;
    case 6:
      day = "saturday";
      break;
    default:
      console.log("error: current day equal to: " + currentDay);
  }
// this function render our veriable list templeting page listDay is ejs mark point that our variable replace
  res.render("list", {
    listDay: day
  });
});


app.listen(3000, function() {
  console.log("server is runing on port 3000.");
})
