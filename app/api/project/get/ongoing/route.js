import prisma from "@/prismaClient";
import { NextResponse as res } from "next/server";
export async function GET(){
    try {
        const projectList = await prisma.ongoingProject.findMany()
        return res.json({success:true,data:projectList},{status:200});
    } catch (error) {
        console.log("error: ",error)
        return res.json({success:false,data:[]},{status:500});
    }
}