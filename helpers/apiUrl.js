const prod = true;
let apiUrl = "http://localhost:3000/api"
if(prod){
    apiUrl = "https://mohammad-minhaz.vercel.app/api"
}

export default apiUrl;