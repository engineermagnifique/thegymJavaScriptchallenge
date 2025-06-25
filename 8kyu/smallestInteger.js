function findSmallestInt(arr) {
  let min=arr.reduce((acc,val)=>{
     if(acc===null||val<acc)
        return val;
    return acc;
},null)
  return min;
}
let arr=[10,3,4,5,-23];
console.log(findSmallestInt(arr));