const array1=[
    0, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17,
    [0, 1],
    [2, 3],
    [4, 5]
]
const flatArray=array1.flat();
console.log(flatArray); 
console.log(array1.flat(2));