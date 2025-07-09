function moveZeros(arr) {
  let newArr=[];
  let oldArr=[];
  arr.map((element)=>{
       if(element===0){
          newArr.push(element);
       } else {
        oldArr.push(element);
      }})
  return oldArr.concat(newArr);
}
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))