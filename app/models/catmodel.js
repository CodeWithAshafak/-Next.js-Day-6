const mongoose = require("mongoose");
const catSchma = new mongoose.Schema({
  cat :String,
  
})


const Category = mongoose.models.categoryModel || mongoose.model("categoryModel",catSchma);
export default Category;