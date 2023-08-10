import getParams from "@/helpers/getParams";
import { NextResponse as res } from "next/server";
export async function GET(req){
    try {
        const page = getParams(req)
        const projectList = await prisma.projects.aggregate({
            orderBy: {
                priority: 'desc',
            },
            skip:Number(3*Number(page)),
            take: Number(page),
        })
        return res.json({success:true,data:projectList},{status:200});
    } catch (error) {
        return res.json({success:false,data:[]},{status:500});
    }
}