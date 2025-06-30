function lastTwoChars(name)
{
   let newArray=[];
   newArray.push(name.at(-2));
   newArray.push(name.at(-1));
   return newArray;
}
console.log(lastTwoChars("Magnifique"));