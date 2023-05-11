const productData=require("../Model/items")
let getProductCon=async(req,res)=>{
    var allproducts=await productData.find()
    console.log(allproducts)

    console.log(res.json(allproducts))

}
module.exports=getProductCon