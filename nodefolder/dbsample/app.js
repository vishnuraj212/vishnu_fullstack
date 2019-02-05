var express=require("express")
var app=express()
var mongodb=require("mongodb");
var mongoclient=mongodb.MongoClient;
var bodyParser = require('body-parser')
var multer = require('multer');
const path = require('path');
app.use(bodyParser.urlencoded({extended:false}))
var url="mongodb://127.0.0.1:27017/mydb"
app.set("view engine","ejs");

app.get('/',function(req,res)
{
res.render("emphome")
})
app.get('/insert',function(req,res)
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
app.get("/view",function(req,res)
{
    mongoclient.connect(url,function(err,database)
    {
        if(err)
        {
            console.log(err)
        }
        else{
            var datab=database.db('mydb');
            var collections=datab.collection("empl")
            collections.find({}).toArray(function(err,tbdata)
            {
                if(err)
                {
                    console.log(err)
                }
                else{
              res.render("viewemp",{data:tbdata})
                }
            })
        }
    })
})

app.get("/delete",function(req,res)
{
    mongoclient.connect(url,function(err,database)
    {
        if(err)
        {
            console.log(err)
        }
        else{
            var datab=database.db('mydb');
            var collections=datab.collection("empl")
            collections.find({}).toArray(function(err,tbdata)
            {
                if(err)
                {
                    console.log(err)
                }
                else{
              res.render("delete",{data:tbdata})
                }
            })
        }
    })
})
app.post("/remove",function(req,res){
    mongoclient.connect(url,function(err,database)
    {

            var datab=database.db('mydb');
            var collections=datab.collection("empl")
            var data={"EID":req.body.eid}
            collections.remove(data,function(err,result)
            {
                if(err)
                {
                    res.send("Error occured")
                    console.log(err)
                }
                else{
                    res.send("Sucessfully Removed Employee")
                }
            })
    })
})
app.get('/update',function(req,res)
{
    mongoclient.connect(url,function(err,database)
    {
        if(err)
        {
            console.log(err)
        }
        else{
            var datab=database.db('mydb');
            var collections=datab.collection("empl")
            collections.find({}).toArray(function(err,tbdata)
            {
                if(err)
                {
                    console.log(err)
                }
                else{
              res.render("update",{data:tbdata})
                }
            })
        }
    })
})
app.post("/updatedetails",function(req,res)
{
   
    data={"EID":req.body.eid}
    mongoclient.connect(url,function(err,database)
    {
        if(err)
        {
            console.log(err)
        }
        else{
            var datab=database.db('mydb');
            var collections=datab.collection("empl")
            collections.find(data).toArray(function(err,tbdata)
            {
                if(err)
                {
                    console.log(err)
                }
                else{
             res.render("updatedetails",{data:tbdata})
                }
            })
        }
    })
})
app.post("/updatedb",function(req,res){
    mongoclient.connect(url,function(err,database)
    {

            var datab=database.db('mydb');
            var collections=datab.collection("empl")
            var eid=req.body.eid
            var name=req.body.name
            var salary=req.body.salary
            collections.update({"EID":req.body.eid,},{$set:{EID:eid,name:name,Salary:salary}},function(err,result)
            {
                if(err)
                {
                    res.send("Error occured")
                    console.log(err)
                }
                else{
                    res.send("Sucessfully Updated Employee Details")
                }
            })
    })
})
app.get("/upload",function(req,res)
{
    app.use(multer({ dest:"./images/",
    rename: function (fieldname, filename) {
      return filename;
    },
   }));
    res.render("imageupload")
})




app.listen(8000,function(req,res)
{
    console.log("Server Started")
})