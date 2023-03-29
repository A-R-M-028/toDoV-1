//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["buy", "sell"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
// to use style sheet
app.use(express.static("public"));

app.get("/", function(req, res){
    var toDay = new Date();

    var options = {
        weekDay: "long",
        day: "numeric",
        month: "long"
    };

    var day = toDay.toLocaleDateString("en-US", options);

    res.render("list", {
        kindOfDay: day,
        newListItems: items
    });
});

app.post("/", function(req, res){
    var newItem = req.body.newItem;

    items.push(newItem);

    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started on port 3000.");
});
