var express=require("express")
var app=express()
var mongodb=require("mongodb");
var mongoclient=mongodb.MongoClient;
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.set("view engine","ejs");
var mongoose=require('mongoose');
var db="mongodb://localhost/example";
const fileupload=require('express-fileupload');
app.use(fileupload());
mongoose.connect(db,function(err)
{
    console.log(err)
});
var book=require("./model/book")
app.get('/',function(req,res)
{
res.render("home")
})
app.post('/insert',function(req,res)
{
var book1=new book();
book1.bookid=req.body.bookid;
book1.bname=req.body.bookname;
book1.author=req.body.author;
book1.save(function(err,result)
{
    if(err)
    {
        res.send("Error occured")
    }
    else{
      res.send("Inserted")  }
})
})
app.post("/delete",function(req,res)
{
    book.deleteOne({"bookid":req.body.dbookid},function(err,result)
    {
        if(err)
        {
            res.send("error occured")
        }
        else{
            res.send("Successfully deleted")
        }
    })
})
app.post("/view",function(req,res)
{
    var bookid=req.body.dbookid
    book.find({"bookid":bookid},function(err,result)
    {
        if(err)
        {
            res.send("Error")
        }
        else{
            res.render("view",{data:result})
        }
    })
})
app.post("/edit",function(req,res)
{
    var bid=req.body.dbookid
    book.findOne({"bookid":bid},function(err,result)
    {
        if(err)
        {
            res.send("Error")

        }
        else
        {
            result.bookid="B1005"
            result.bname="Wings of Fire"
            result.author="APJ"
            result.save(function(err,result2)
            {
                if(err)
                {
                    res.send("Error occured")
                }
                else{
                    res.send("Successfully updated")
                }
            })
        }
    })
})
app.post('/upload',function(req,res)
{
    let samfile=req.files.samplefile;
    console.log(samfile.name)
    samfile.mv(__dirname+"/Images/"+samfile.name,function(err,result)
    {
if(err)
{
    res.send(err)
    res.send("Error")
}
else
{
    res.send("File uploaded")
}
    })
})
app.get("/login",function(req,res)
{
    res.render("login")
})
app.post("/login",function(req,res)
{
    let name=req.body.name
    res.render("loginhome",{loginname:name})
})
app.listen(8001,function(req,res)
{
    console.log("Server Started")
})