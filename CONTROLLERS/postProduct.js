const productData=require("../Model/items")

let postProduct= async (req,res)=>{
   let data=new  productData({...req.body}) 
   await data.save()
  res.json(req.body);
}
module.exports=postProduct