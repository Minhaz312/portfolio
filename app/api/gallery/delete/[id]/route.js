import getParams from "@/helpers/getParams";
import { NextResponse } from "next/server";
import fs from "node:fs"
export async function DELETE(req) {
    try {
        const name = getParams(req);
        fs.unlinkSync(process.cwd()+"/public/storage/"+name);
        return NextResponse.json({success:true,message:"Deleted file successfully"},{status:200})
    } catch (error) {
        return NextResponse.json({success:false,message:"File not found"},{status:401})
    }
}