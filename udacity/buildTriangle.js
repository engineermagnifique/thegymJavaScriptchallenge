function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    for(var i=1; i<=j ; i++)
    {
         line += "* ";
         return line + "\n";
    }
  }
}
console.log(makeLine(10));