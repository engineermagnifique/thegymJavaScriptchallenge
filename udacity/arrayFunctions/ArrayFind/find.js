const array = [1, 2, 3, 4, 5];
const found=array.find((e)=> e > 3);
console.log(found); //it only returns the first element
console.log(array.findIndex((e)=> e > 3));
console.log(array.indexOf(found+1)) //it returns the index of the first element that matches the condition