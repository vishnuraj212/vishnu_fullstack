var express=require('express')
const app=express();

app.get("/",function(req,res)
{
   res.sendfile("./login.html")
})

app.get("/employee",function(req,res)
{
    res.send("Employee Details")
})
app.get("/home",function(req,res)
{
    res.sendFile(__dirname+"/home.html")
    console.log(__dirname)
})
app.get("/employeehome",function(req,res)
{
    res.sendFile(__dirname+"/employeehome.html")
})
app.get("/productshome",function(req,res)
{
    res.sendFile(__dirname+"/products.html")
})
app.get("/home/employeehome1/newemployee",function(req,res)
{
    res.sendFile(__dirname+"/newemployee.html")
})
app.get("/home/products/addnewprodect",function(req,res)
{
    res.sendFile(__dirname+"/addnewprodect.html")
})
app.get("/home/products/deleteproduct",function(req,res)
{
    res.sendfile("./deleteproduct.html")
})
app.listen(8000,function(req,res)
{
    console.log("Server started running")
})