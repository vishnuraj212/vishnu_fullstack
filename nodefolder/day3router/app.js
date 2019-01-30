var express=require("express")
app=express();
app.set("view engine", "ejs")
var emprouter=require('./Routes/emprouter')
var prdrouter=require('./Routes/prdrouter')
app.use("/emp",emprouter)
app.use('/prd',prdrouter)
app.get('/',function(req,res)
{
    res.render("home")
})
app.listen(8000,function(req,res)
{
    console.log("server started")
})