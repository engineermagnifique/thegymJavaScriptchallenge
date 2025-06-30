function shiftRight(arr)
{
   return arr.copyWithin(2,arr.slice(0,2));
}
console.log(shiftRight([10, 20, 30, 40, 50]));
