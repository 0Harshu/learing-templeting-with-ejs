//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//this "app.set('view engine', 'ejs');" redirect oure views folder to list page
app.set('view engine', 'ejs');

app.get("/", function(req, res){

    var today = new Date();
    var currentDay = today.getDate();
    var day = "";
//we use if and else method when we have 1,2 or 3 variables
    if (currentDay === 6 || currentDay === 0){
      day = "weekend";

    }else{
      day = "Weekday";
    }
  //this function render our veriable list templeting page kindOfDay is ejs mark point that our variable replace
    res.render('list', {kindOfDay: day});
  });


app.listen(3000, function(){
  console.log("server is runing on port 3000.");
})



// const express = require("express");
// const bodyParser = require("body-parser");
//
//
// const app = express;
// const port = 3000;
//
// app.get('/', function(req, res){
//
//   var today = new Date();
//   var currentDay = today.getDate();
//
//   if (currentDay == 6 || currentDay == 0){
//     res.write("Ooo Today is working day");
//
//   }else{
//     res.sendFile(__dirname + "/indext.html");
//   }
// });
//
// app.listen(3001, function(){
//   console.log("server is runing on port 3001.");
// });
