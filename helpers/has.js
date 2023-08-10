export default function has(data,key) {
  if(data[key]!=="" && data[key]!==null && data[key]!==undefined){
    return true;
  }else{
    return false;
  }
}
