import { NextResponse } from "next/server";
import fs from "node:fs"
import {Buffer} from "node:buffer"
import { v4 as uuidv4 } from 'uuid';


export async function POST(req) {
    try {
        const uniqueId = uuidv4()
        const data = await req.formData()
        const image = await data.get("file");
        console.log("image: ",image)
        const imgExtn = image.type.split("/")[1];
        let fileExtension = imgExtn;
        if(imgExtn==="svg+xml"){
            fileExtension = "svg"
        }
        if(imgExtn==="pdf"){
            fileExtension = "pdf"
        }
        
        const file = Buffer.from(await image.arrayBuffer());
        fs.writeFileSync(`${process.cwd()}/public/storage/${uniqueId}.${fileExtension}`,file)
        return NextResponse.json({success:true,message:"Uploaded successfully"},{status:200})
   } catch (error) {
       return NextResponse.json({success:false,message:"Failed to upload"},{status:400})
   }
}