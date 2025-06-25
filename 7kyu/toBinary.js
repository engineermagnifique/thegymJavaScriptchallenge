function addBinary(a,b) {
  return ((a+b)>>>0).toString(2);
}
console.log(addBinary(4,5));