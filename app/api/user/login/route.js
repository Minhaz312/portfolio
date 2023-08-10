import has from "@/helpers/has";
import passEncrypt from "@/helpers/passEncrypt";
import prisma from "@/prismaClient";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json();
        if(has(data,"email")===true && has(data,"password")===true){
            const encryptedPass = passEncrypt(data.password);
            console.log("encryptedPass: ",encryptedPass)
            const isExist = await prisma.users.findUnique({
                where:{
                    email:data.email,
                    password: encryptedPass
                }
            })
            if(isExist!==null){
                const payload = {loggedIn:true,user:isExist.id}
                const token = jwt.sign(payload,process.env.JWT_SECRET,{algorithm:"HS256"})
                return NextResponse.json({success:true,token:token,message:"Loggedin success"},{status:200});
            }else{

                return NextResponse.json({success:false,token:null,message:"Invalid email or password"},{status:400});
            }
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({success:false,token:null,message:"Failed to login"},{status:500});
    }
}

