import jwt from "jsonwebtoken";
export default function isAuthorized(req) {
    const bearerToken = req.headers.get("authorization").split(" ")
    const token = bearerToken[bearerToken.length-1]
    console.log("token: ",token)
    const authorized = jwt.decode(token,process.env.JWT_SECRET,{algorithms:"HS256"});
    return authorized
}