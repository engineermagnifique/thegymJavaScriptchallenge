function pigIt(str){
  return str.split(" ").map((element)=>element.slice(1).concat(element.charAt(0),'ay'))
}
console.log(pigIt("Pig is Large"));