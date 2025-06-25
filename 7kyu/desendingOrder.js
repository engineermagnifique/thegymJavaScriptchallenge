function descendingOrder(n){
  let newArray=Array.from(n.toString()).sort(function(a,b){return b-a});
  return Number(newArray.join(""));
}
console.log(descendingOrder(233387));