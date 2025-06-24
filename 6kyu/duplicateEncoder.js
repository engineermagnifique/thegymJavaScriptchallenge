function duplicateEncode(word){
    var word=word.toLowerCase();
    let newWord="";
    for(var i=0;i<word.length;i++)
      {
         if(word.lastIndexOf(word[i])===word.indexOf(word[i]))
           {
             newWord+="(";
           }
        else {
          newWord+=")";
        }
      }
    return newWord;
}

let word="recede";
console.log(duplicateEncode(word));