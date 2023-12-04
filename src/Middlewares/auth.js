const jswt=require('jsonwebtoken');

const verifyToken=(req,res,next)=>{
  const token=req.body.token || req.query.token || req.headers["x-access-token"];

  if(!token){
    return res.status(403).send("A token is required for authentication >:(")
  }

  try {
     const decoded=jswt.verify(token,process.env.SECRETKEY);
     req.user=decoded;
  } catch (e) {
    console.log(e.message);
    return res.status(401).json({message:"Invalid token :("})
  }

   return next();

}

module.exports=verifyToken;