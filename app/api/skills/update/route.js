import fs from "node:fs"

import { NextResponse as res } from "next/server";

import prisma from "@/prismaClient";
import { v4 as uuidv4 } from 'uuid';

import has from "@/helpers/has";

export async function PUT(req){
    try {
        const formData = await req.formData()
        const image = await formData.get("icon");
        const id = await formData.get("id");
        const existData = await prisma.skills.findUnique({where:{id:id}});

        if(existData==null){
            return res.json({success:false,message:"Skill not found"},{status:400});
        }else{
            let body = {};
            let filename;
            if(formData.get("name")!=null){
                body.name = formData.get("name")
            }else{
                body.name = existData.name;
            }
            if(formData.get("color")!=null){
                body.color = formData.get("color")
            }else{
                body.color = existData.color;
            }
            if(image!=null){
                const uniqueId = uuidv4()
                const imgExtn = image.type.split("/")[1];
                const file = Buffer.from(await image.arrayBuffer());
                filename = `${uniqueId}.${imgExtn}`
                fs.writeFile(`${process.cwd()}/public/storage/${filename}`,file,async (err)=>{
                    if(err){
                        return res.json({success:false,message:"Invalid input given"},{status:400}) 
                    }
                })
                body.icon = filename
            }else{
                body.icon = existData.icon;
            }
            console.log("body: ",body)
            if(has(body,"name")===true && has(body,"color")===true && has(body,"icon")){
                const data = {name:body.name,color:body.color,icon:body.icon};
                await prisma.skills.update({where:{id:id},data:data});
                if(image!=null){
                    console.log("deleting existing icon to replace new icon")
                    fs.unlink(`${process.cwd()}/public/storage/${existData.icon}`,(err=>{
                        if(err){
                            console.log("failed to delete existing icon")
                        }else{
                            console.log("exiting icon deleted")
                        }
                    }))
                }
                return res.json({success:true,message:"Skill updated successfully"},{status:200})
            }else{
                console.log("failed to upload data into database")
                fs.unlink(`${process.cwd()}/public/storage/${filename}`,(err=>{
                    console.log("uploaded image deleted bcz operation failed")
                }))
                return res.json({success:false,message:"Invalid input given"},{status:400})
            }
        }

    } catch (error) {
        console.log("skill add error: ",error)
        return res.json({success:false,message:"Invalid input given"},{status:500})
    }
}