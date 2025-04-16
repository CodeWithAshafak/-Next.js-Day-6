const mongoose = require("mongoose");
const proSchma = new mongoose.Schema({
  imgname:String,
  pname:String,
  pdec:String,
  price:Number,
  cat:String
})
const ProductModel = mongoose.models.productModel || mongoose.model("productModel", proSchma);

export default ProductModel ;