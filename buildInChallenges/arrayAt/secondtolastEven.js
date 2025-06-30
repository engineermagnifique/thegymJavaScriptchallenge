function secondToLastEven(num){
  const evenNumbers=num.filter((n)=>n%2===0);
  return evenNumbers.length>=2? evenNumbers.at(-2):null;
}
console.log(secondToLastEven([3, 7, 8, 10, 30,12,6, 13, 4]));
