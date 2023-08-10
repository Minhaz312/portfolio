import { NextResponse } from "next/server";
import fs from "node:fs"
export async function GET(){
    const result = fs.readdirSync(process.cwd()+"/public/storage");
    console.log("result: ",result)
    return NextResponse.json({success:true,data:result},{status:200});
}