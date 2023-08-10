import prisma from "@/prismaClient";
import { NextResponse } from "next/server";
export async function GET(){
    try {
        const result = await prisma.skills.findMany();
        return NextResponse.json({success:true,data:result},{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({success:false,data:[]},{status:500})
    }
}