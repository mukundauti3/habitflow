const router=require("express").Router();
const db=require("../db");

router.get("/",(req,res)=>{
 db.query("SELECT * FROM daily_tasks",(e,r)=>res.json(r));
});

module.exports=router;
