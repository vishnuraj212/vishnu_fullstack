var express=require("express")
const app=express();
var bodyparser=require("body-parser")
app.use(bodyparser.urlencoded({extended:true}))
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/login.html")
})
app.get("/home",function(req,res)
{
    res.sendFile(__dirname+"/home.html")
})
app.post("/home",function(req,res)
{
if(req.body.username=='admin'&&req.body.password=="admin")
{
    
    res.sendFile(__dirname+"/home.html")
}
else
{
    res.send("Invalid Username or Password !!!")
}
})
app.get("/signup",function(req,res)
{
    res.sendFile(__dirname+"/signup.html")
})
app.post("/display",function(req,res)
{
    res.send("<html><body><h1>Signup details<br/></h1>User Name:"+req.body.username+"<br/>password:"+req.body.password+"<br/><a href='/'>Go to login</a></body></html")
    
    
})
app.listen(8001,function(req,res)
{
    console.log("Server started")
})