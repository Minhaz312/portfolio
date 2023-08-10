import prisma from "@/prismaClient";
import { NextResponse as res } from "next/server";
export async function GET(){
    try {
        const projectList = await prisma.projects.findMany()
        return res.json({success:true,data:projectList},{status:200});
    } catch (error) {
        return res.json({success:false,data:[]},{status:500});
    }
}