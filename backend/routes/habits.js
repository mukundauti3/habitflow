const router=require("express").Router();
const db=require("../db");

router.get("/",(req,res)=>{
 db.query("SELECT * FROM habits",(e,r)=>res.json(r));
});

router.post("/",(req,res)=>{
 db.query("INSERT INTO habits(name) VALUES(?)",[req.body.name],()=>res.send("ok"));
});

module.exports=router;
