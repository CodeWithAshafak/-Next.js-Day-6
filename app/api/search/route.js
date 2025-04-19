
import mongodb from "../../lib/mongodb";



import ProductModel from "../../models/promodel";


export async function GET(req,res){
  await mongodb(); 
  try {
    const response = await ProductModel.find();
    // return NextResponse.json(response);
    return Response.json(response);
  } catch (error) {
    // return NextResponse.json(error)
     return Response.json(error)
    
  }
}