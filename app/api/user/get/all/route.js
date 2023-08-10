import prisma from "@/prismaClient";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const users = await prisma.users.findMany()
        return NextResponse.json({success:true,data:users},{status:200})
    } catch (error) {
        return NextResponse.json({success:false,data:[]},{status:500})
    }
}