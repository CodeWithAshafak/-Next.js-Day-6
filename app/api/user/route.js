

import User from "@/app/models/User";
import dbConnect from "@/app/lib/mongodb";
import bcrypt from 'bcrypt'
export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();
    console.log('data is',data);
    
    const {username,email,password,phone}=data;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await User.create({
    username:username,
    email:email,
    password:hashedPassword,
    phone:phone
  })
   return Response.json({ message: 'User Register successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed to Register' }, { status: 500 });
  }
}
