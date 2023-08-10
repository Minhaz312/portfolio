let jsonHeader;
let formHeader;
if(typeof window !=="undefined"){
    jsonHeader = {headers:{"Content-Type":"application/json","Authorization":`Bearer ${window.localStorage.getItem("port_token")}`}}
    formHeader = {headers:{"Content-Type":"multipart/form-data","Authorization":`Bearer ${window.localStorage.getItem("port_token")}`}}

}

export {jsonHeader,formHeader}