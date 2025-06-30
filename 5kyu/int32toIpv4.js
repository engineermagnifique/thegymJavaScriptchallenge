function int32ToIp(int32){
  let res=int32.split(".").map((n)=>parseInt(n).toString(2));
  return res.map((n,index)=>index===3? formatIp(n) || formatIp(n).pop()).join("");
}
function formatIp(num){
  if(num.toString().length>=8){
    return num+".";
  } else {
     var newNum='';
     for(let i=0;i<8-(num.toString().length);i++)
     {
        newNum+="0"
     }
     return newNum+num+".";
  }
}
console.log(int32ToIp("128.32.10.1"));