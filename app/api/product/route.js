
import mongodb from "../../lib/mongodb";

//import proModel from "../../models/promodel";

import ProductModel from "../../models/promodel";


export async function POST(req, res) {
  await mongodb();
  try {
    const data = await req.json();
     
    console.log("data", data);
    const {
      imgname,
      pname,
      pdec,
      price,
      cat
    } = data
    
    const response = await ProductModel.create({
      imgname:imgname,
      pname:pname,
      pdec:pdec,
      price:price,
      cat:cat
    });

    return Response.json(response);
  } catch (error) {
    
    return Response.json(error);
  }
}
 
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