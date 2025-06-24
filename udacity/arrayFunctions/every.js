const array1=[1,30,39,29,10,13,37,13,9,1,2,3,4,5];
const isUnder100=(element)=>{
  return element<100;
}
const isOver100=(element)=>{
    return element>100;
}
console.log(array1.every(isUnder100));
console.log(array1.every(isOver100));
//you can check a subset of the array
console.log(array1.slice(0,5).every((e)=>{
    array1.includes(e);
}));