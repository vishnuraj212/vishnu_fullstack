var express = require('express');
var router = express.Router();


var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended:false}))

var mongoose=require('mongoose');
var db="mongodb://localhost/example1";
const fileupload=require('express-fileupload');
router.use(fileupload());
mongoose.connect(db,function(err)
{
    console.log(err)
});
var book=require("../model/book")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/addbook', function(req, res, next) {
  res.render('addbook');
});

router.get('/view', function(req, res, next) {
  res.render('viewbook');
});
router.post('/bookentry', function(req, res, next) {
  var book1=new book();
  book1.BID=req.body.bookid;
  book1.BNAME=req.body.bookname;
  book1.AUTHOR=req.body.author;
  book1.BPRICE=req.body.price;

 
  let samfile=req.files.samplefile
  console.log(samfile.name)
  let fname="../public/images/"+samfile.name
  book1.BIMAGE=fname;
    samfile.mv("../myapp/public/images/"+samfile.name,function(err,result)
    {
if(err)
{
    res.send(err)
    res.send("Error")
}
else
{
    console.log("File uploaded")
}
    })
  book1.save(function(err,result)
{
    if(err)
    {
        res.send("Error occured")
    }
    else{
      console.log("Inserted")  }
})
 
});


module.exports = router;
