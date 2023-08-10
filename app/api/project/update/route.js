import has from "@/helpers/has";
import prisma from "@/prismaClient";
import { NextResponse as res } from "next/server";
export async function PUT(req){
    try {
        const data = await req.json()
        const updatedData = {}
        const id = data.id;
        if(has(data,"title")===true){
            updatedData.title = data.title
        }
        if(has(data,"desc")===true){
            updatedData.desc = data.desc
        }
        if(has(data,"priority")===true){
            updatedData.priority = data.priority
        }
        if(has(data,"thumbnile")===true){
            updatedData.thumbnile = data.thumbnile
        }
        if(has(data,"links")===true){
            updatedData.links = data.links
        }
        if(has(data,"technologies")===true){
            updatedData.technologies = data.technologies
        }
        await prisma.projects.update({
            where:{
                id:id
            },
            data:updatedData
        })
        return res.json({success:true,message:"Updated successfully"},{status:200})
    } catch (error) {
        console.log("error: ",error)
        return res.json({success:false,message:"Failed to update"},{status:500})
    }
}