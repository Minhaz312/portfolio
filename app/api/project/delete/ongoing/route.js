import prisma from "@/prismaClient";
import { NextRequest as req, NextResponse as res } from "next/server";
export async function DELETE(req){
    try {
        await prisma.ongoingProject.deleteMany();
        return res.json({success:true,message:"Deleted successfully"},{status:200})
    } catch (error) {
        console.log("error: ",error)
        return res.json({success:false,message:"Failed to delete"},{status:500})
    }
}