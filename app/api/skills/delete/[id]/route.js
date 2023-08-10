import getParams from "@/helpers/getParams";
import has from "@/helpers/has";
import prisma from "@/prismaClient";
import { NextResponse as res } from "next/server";
export async function DELETE(req){
    try {
        const id = getParams(req);
        const isExist = await prisma.skills.findUnique({where:{id:id}});
        console.log("isExist: ",isExist)
        if(isExist.id!==undefined){
            console.log("entered to delete")
            await prisma.skills.delete({where:{id:id}});
            return res.json({success:true,message:"Skill deleted successfully"},{status:200})
        }else{
            return res.json({success:false,message:"Invalid input given"},{status:400})
        }
    } catch (error) {
        console.log("error: ",error)
        return res.json({success:false,message:"Invalid input given"},{status:500})
    }
}