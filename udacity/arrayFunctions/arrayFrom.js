console.log(Array.from('foo')); 
console.log(Array.from([1,2,3],(x)=> x + x));
//you can create an array from a set
const set=new Set([1,2,3,2,1]);
Array.from(set);
console.log(set);