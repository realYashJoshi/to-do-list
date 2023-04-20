const express=require("express");
const bodyparser=require("body-parser");

const app=express();
var itemarray=[];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine','ejs');
app.get("/",function(req,res){
    var d= new Date();
    var today=d.getDate();
    var month=months[d.getMonth()];
    
    res.render("list",{day:today, month:month,newItems:itemarray});    
})
app.post("/",function(req,res){
  var item=req.body.newItem;
  itemarray.push(item);
  
 res.redirect("/");
})
app.listen(3000,function(){
    console.log("Server is Up and running");
})
