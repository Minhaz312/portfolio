import crypto from "node:crypto"
export default function passEncrypt(password) {
    try {
        return crypto.createHmac("sha256",process.env.CRYPTO_SECRET).update(password).digest("hex");
    } catch (error) {
        return password
    }
}
