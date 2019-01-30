var express=require("express")
var router=express.Router();
router.get('/',function(req,res)
{
    res.render("productshome")
})
router.get('/printerhome',function(req,res)
{
    res.render("printerhome")
})

router.get('/printerhome/newprinter',function(req,res)
{
    res.render("newprinter")
})
router.get('/printerhome/editprinter',function(req,res)
{
    res.render("editprinter")
})
router.get('/printerhome/delprinter',function(req,res)
{
    res.render("deleteprinter")
})
router.get('/printerhome/viewprinter',function(req,res)
{
    res.render("viewprinter")
})


router.get('/scannerhome',function(req,res)
{
    res.render("scannerhome")
})
router.get('/scannerhome/newscanner',function(req,res)
{
    res.render("newscanner")
})
router.get('/scannerhome/delscanner',function(req,res)
{
    res.render("deletescanner")
})
router.get('/scannerhome/viewscanner',function(req,res)
{
    res.render("viewscanner")
})
router.get('/scannerhome/editscanner',function(req,res)
{
    res.render("editscanner")
})


module.exports=router;