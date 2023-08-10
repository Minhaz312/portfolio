import jwt from 'jsonwebtoken'
export default function getJwtPayload(header) {
    const bearerToken = header.get("authorization").split(" ")
    const token = bearerToken[bearerToken.length-1]
    return jwt.decode(token,process.env.JWT_SECRET,{algorithms:"HS256"});
}
