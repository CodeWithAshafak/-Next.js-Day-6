
import mongodb from "../../lib/mongodb";
import CatModel from "../../models/catmodel";


export async function POST(req, res) {
  await mongodb();
  try {
    const data = await req.json();
    console.log(data);

    const { cat } = data;
    const response = await CatModel.create({
      cat:cat
    });

    // return NextResponse.json(response);
    return Response.json(response);
  } catch (error) {
    //return NextResponse.json(error);
    return Response.json(error);
  }
}
 

export async function GET(req,res){
  await mongodb(); 
 
  try {
    const response = await CatModel.find();
    // console.log("this is res",response);
    
    return Response.json(response);
  } catch (error) {
     return Response.json(error)
  }
}