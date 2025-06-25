function squareDigits(num){
  let newArray=Array.from(num.toString());
  const array=newArray.map((n)=>
     n*n
   );
   return array.join("");
}
console.log(squareDigits(3212));