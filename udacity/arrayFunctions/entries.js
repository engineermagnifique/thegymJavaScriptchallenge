const array1= [5, 12, 8, 130, 44];
const iterator=array1.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
//we can also use for of to access the entries
for (const [index,element] of array1.entries()) {
  console.log(index, element);
}
for(const element of [,"8"].entries()) {
  console.log(element);
}