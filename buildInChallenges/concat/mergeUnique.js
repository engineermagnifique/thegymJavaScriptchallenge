function mergeUnique(arr1,arr2)
{
 let newArray=[];
 arr1.concat(arr2).forEach(n=>{
    if(!newArray.includes(n)) {
        newArray.push(n);
    }
 });
 return newArray;
}
console.log(mergeUnique([3, 1, 4], [4, 5, 1, 2]));