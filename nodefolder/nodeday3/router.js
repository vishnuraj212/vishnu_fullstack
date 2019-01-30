var express=require("express")
const app=express();
var bodyparser=require('body-parser')
var fun=require("./exportfunction")
app.use(bodyparser.urlencoded({extended: false}));
var books=[{Bid:"bk1",bookname:"node.js",author:"google",price:300},{Bid:"bk2",bookname:"Angular.js",author:"balaguruswamy",price:600}]
app.set("view engine", "ejs")
app.get('/',function(req,res)
{
    res.render("login")
    console.log(fun.get()+"   "+fun.domain);
})
app.get('/signup',function(req,res)
{
    res.render("signup")
})
app.post('/home',function(req,res)
{
    
    res.render("home",{data:books})
})
app.listen(8002,function(req,res)
{
    console.log("Server started running")
})