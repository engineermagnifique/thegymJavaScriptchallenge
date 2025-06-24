function isIsogram(str){
  for(let i=0;i<str.length;i++){
    if(str.toUpperCase().indexOf(str[i].toUpperCase())!==str.toUpperCase().lastIndexOf(str[i].toUpperCase())){
      return false; 
    }
  }
  return true;
}
console.log(isIsogram("moOse")); 
console.log(isIsogram("Dermatoglyphics"));