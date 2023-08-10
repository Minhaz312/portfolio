import { NextResponse } from "next/server";
import has from '@/helpers/has';

export async function POST(req) {
    try {
        const data = await req.json();
        if(has(data,"userMail")===true && has(data,"message")===true) {
            const usermail = data.userMail;
            const message = data.message;
            const mailData = {
                service_id:process.env.EMAILJS_SERVICE_ID,
                template_id:process.env.EMAILJS_TEMPLATE_ID,
                user_id:process.env.EMAILJS_PUBLIC_KEY,
                template_params:{
                    from_name:"minhazcse312@gmail.com",
                    to_name:"minhazkhan312@gmail.com",
                    message:message
                }
            }
            console.log("mailData: ",mailData)
            fetch("https://api.emailjs.com/api/v1.0/email/send",{
                method:"POST",
                body: JSON.stringify(mailData),
                headers: {'Content-Type': 'application/json'}
            }).then(res=>res.json()).then(res=>{
                return NextResponse.json({success:true,message:"Mail Sent"},{status:200})
            }).catch(err=>{
                console.log("err: ",err)
                return NextResponse.json({success:false,message:"Failed to send mail"},{status:400})
            })
        }else{
            return NextResponse.json({success:false,message:"Failed to send mail"},{status:400})
        }
    } catch (error) {
        return NextResponse.json({success:false,message:"Failed to send mail"},{status:500})
    }
}