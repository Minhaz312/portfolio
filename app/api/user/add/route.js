import { NextResponse as res } from "next/server";
import prisma from "@/prismaClient";
import passEncrypt from "@/helpers/passEncrypt";
import getJwtPayload from "@/helpers/getJwtPayload";

export async function POST(req){
    try {
        const body = await req.json();
        const id = body.id
        const title = body.title
        const slogan = body.slogan
        const about = body.about
        const email = body.email
        const mobile = body.mobile
        const github = body.github
        const facebook = body.facebook
        const linkedin = body.linkedin
        const houseAddr = body.houseAddr
        const resume = body.resume
        const password = body.password
        const newPassword = body.newPassword
        const oldPassword = body.oldPassword
        
        const registeredUser = await prisma.users.findMany();
        
        if(registeredUser.length<1 && id===null && title!==null && slogan!==null && about!==null && email!==null && mobile!==null && resume!==null && password!==null && oldPassword===null){
            let encryptedPassword = passEncrypt(password)
            const data = {title,slogan,about,email,mobile,resume,password:encryptedPassword}
            await prisma.users.create({data:data});
            return res.json({success:true,message:"Account created successfully"},{status:200})  
        }else if(registeredUser.length===1 && id!==null && oldPassword!==null && passEncrypt(oldPassword)===registeredUser[0].password){
            const updatedData = {}
            if(title!==null){
                updatedData.title = title
            }
            if(slogan!==null){
                updatedData.slogan = slogan
            }
            if(about!==null){
                updatedData.about = about
            }
            if(email!==null){
                updatedData.email = email
            }
            if(mobile!==null){
                updatedData.mobile = mobile
            }
            if(resume!==null){
                updatedData.resume = resume
            }
            if(linkedin!==null){
                updatedData.linkedin = linkedin
            }
            if(github!==null){
                updatedData.github = github
            }
            if(facebook!==null){
                updatedData.facebook = facebook
            }
            if(houseAddr!==null){
                updatedData.houseAddr = houseAddr
            }
            if(newPassword!==null){
                updatedData.password = passEncrypt(newPassword)
            }
            let oldEncryptedPassword = passEncrypt(oldPassword);
            const jwtPayload = getJwtPayload(req.headers)
            await prisma.users.update({where:{password:oldEncryptedPassword,id:jwtPayload.user},data:updatedData});
            return res.json({success:true,message:"Updated successfully"},{status:200})  
        }else{
            return res.json({success:false,message:"Invalid Action or input"},{status:400})
        }
    } catch (error) {
        console.log("error: ",error)
        return res.json({success:false,message:"Failed to update or create"},{status:500})
    }
}