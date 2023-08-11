import has from "@/helpers/has";
import { NextResponse as res } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import prisma from "@/prismaClient";
export async function POST(req){
    try {
        const body = await req.json()
        const title = body.title
        const desc = body.desc
        const priority = body.priority
        const thumbnile = body.thumbnile
        const links = body.links
        const technologies = body.technologies
        if(has(body,"title")===true && has(body,"desc")===true && has(body,"priority")===true && has(body,"thumbnile")===true && has(body,"links")===true && has(body,"technologies")===true){
            await prisma.projects.create({data:{
                title,
                desc,
                priority,
                thumbnile,
                links,
                technologies
            }});
            return res.json({success:true,message:"Project added successfully"},{status:200})
        }else{
            return res.json({success:false,message:"All field required"},{status:400})
        }
    } catch (error) {
        console.log("error: ",error)
        return res.json({success:false,message:"failed to add new project"},{status:500})
    }
}

// title String
//     desc String
//     priority String
//     thumbnile String
//     links String[]
//     technologies String[]