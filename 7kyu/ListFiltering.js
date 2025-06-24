function filter_list(l) {
  let newArray=[];
  newArray=l.filter((element)=> typeof(element)==="number")
  return newArray;
}
