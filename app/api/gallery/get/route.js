import { NextResponse } from "next/server";
import fs from "node:fs"
export async function GET(){
    try {
        const result = fs.readdirSync(process.cwd()+"/public/storage");
        console.log("result: ",result)
        return NextResponse.json({success:true,data:result},{status:200});
    } catch (error) {
        console.log("error: ",error)
        return NextResponse.json({success:false,data:[]},{status:500});
    }
}