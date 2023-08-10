export default function getParams(req) {
    const pathnameSplit = req.nextUrl.pathname.split("/");
    return pathnameSplit[pathnameSplit.length-1]
}
