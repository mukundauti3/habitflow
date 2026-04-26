const router=require("express").Router();
const db=require("../db");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

router.post("/login",(req,res)=>{
 const {email,password}=req.body;
 db.query("SELECT * FROM profiles WHERE email=?",[email],async(err,result)=>{
  if(result.length==0) return res.status(400).send("no user");
  const user=result[0];
  const valid=await bcrypt.compare(password,user.password);
  if(!valid) return res.status(400).send("wrong");
  const token=jwt.sign({id:user.id},"secret");
  res.json({token});
 });
});

module.exports=router;
