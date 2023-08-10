import { NextResponse } from "next/server"
import isAuthorized from "./helpers/isAuthorized"
export function middleware(req) {
  try {

    const authorized = isAuthorized(req)
    console.log("authorized: ",authorized)
    if(authorized.user!==undefined){
        return NextResponse.next()
    }
    console.log("middleware: unauthorized user")
    return NextResponse.json("unauthorized",{status:401})
} catch (error) {
    console.log("error: ",error)
    return NextResponse.json("unauthorized action",{status:401})
  }
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/project/:path*','/api/skills/:path*','/api/gallery/:path*','/api/user/add','/api/user/get'],
  runtime: 'experimental-edge', // for Edge API Routes only
  unstable_allowDynamic: [
    // allows a single file
    '/middleware.js',
    // use a glob to allow anything in the function-bind 3rd party module
    '/node_modules/lodash/**',
  ],
}