var express=require("express")
var router=express.Router();

router.get("/",function(req,res)
{
    res.render("employeehome")
})
router.get("/newemp",function(req,res)
{
    res.render("typesofemp")
})
router.get("/newemp/permanentemp",function(req,res)
{
    res.render("permanentemp")
})
router.get("/newemp/temporaryemp",function(req,res)
{
    res.render("temporaryemp")
})

router.get("/editemp",function(req,res)
{
    res.render("editemp")
})
router.get("/delemp",function(req,res)
{
    res.render("deleteemp")
})
router.get("/viewemp",function(req,res)
{
    res.render("viewemp")
})
module.exports=router;
