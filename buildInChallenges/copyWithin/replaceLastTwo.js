function replaceLastTwo(arr){
  return arr.copyWithin(-2,arr.slice(0,2));
}
console.log(replaceLastTwo([1, 2, 3, 4, 5]));