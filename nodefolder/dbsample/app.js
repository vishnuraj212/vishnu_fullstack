var express=require("express")
var app=express()
var mongodb=require("mongodb");
var mongoclient=mongodb.MongoClient;
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
var url="mongodb://127.0.0.1:27017/mydb"
app.set("view engine","ejs");

app.get('/',function(req,res)
{
res.render("home")
})
app.post("/insert",function(req,res){
    mongoclient.connect(url,function(err,database)
    {

            var datab=database.db('mydb');
            var collections=datab.collection("empl")
            var data={"EID":req.body.txt1,"Name":"Vishnu"}
            collections.insert(data,function(err,result)
            {
                if(err)
                {
                    res.send("Error occured")
                }
                else{
                    res.send("Sucessfully Inserted")
                }
            })
    })
})
app.listen(8000,function(req,res)
{
    console.log("Server Started")
})