function insertAt(arr,newArray,index)
{
   return arr.slice(0,index).concat(newArray,arr.slice(index,arr.length));
}

console.log(insertAt(["a", "b", "d"], ["c","k","h"], 2))