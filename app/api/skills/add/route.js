import fs from "node:fs"

import { NextResponse as res } from "next/server";

import prisma from "@/prismaClient";
import { v4 as uuidv4 } from 'uuid';

import has from "@/helpers/has";

export async function POST(req){
    try {
        const data = await req.json()
        if(has(data,"name")===true && has(data,"color")===true && has(data,"priority")===true && has(data,"icon")===true){
            await prisma.skills.create({data:data});
            return res.json({success:true,message:"Skill added successfully"},{status:200})
        }else{
            return res.json({success:false,message:"Invalid input given"},{status:400})
        }
    } catch (error) {
        console.log("error: ",error)
        return res.json({success:false,message:"Invalid input given"},{status:500})
    }
}