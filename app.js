const express = require("express");
const bodyParser = require("body-parser");
const date =require(__dirname+"/date.js");

const app = express();

var items=["Buy Food", "Cook Food", "Eat Food"];
var workItems=[];

app.use(bodyParser.urlencoded({extended:true}));//using body-parser (*app.post)

app.use(express.static("public"));//for using static files

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    
var day=date();
   
    
    res.render("list", {listTitle:day, newListItems: items});  //rendring into ejs file value of *(kindOdDay is day)

});


app.post("/" ,function(req,res){
    var item = (req.body.newItem);
    if(req.body.list ==="Work"){//if from Work List then
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
   
   
});

app.get("/work" ,function(req,res){
    res.render("list", {listTitle:"Work List", newListItems: workItems });
});

app.get("/about" ,function(req,res){
    res.render("about");
});


app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000");
})












// var currentDay = today.getDay(); 
//     var day="";
    
//    switch (currentDay) {
//        case 0:
//         day="Sunday";
//         break;
       
//         case 1:
//         day="monday";
//         break;
        
//         case 2:
//         day="Tuesday";
//         break;

//         case 3:
//         day="Wednesday";
//         break;

//         case 4:
//         day="Thursday";
//         break;

//         case 5:
//         day="friday";
//         break;

//         case 6:
//         day="Saturday";
//         break;
   
//     default:
//         console.log("Error: current is day is equal to" +currentDay);
//    }