function validBraces(braces){
  let openingBrace=['(','[','{'];
  let closingBrace=[')',']','}'];
  let leftBraces=[];
  let count=0;
  let rightBraces=[];
  for(let i=0;i<braces.length;i++)
  {
     if(openingBrace.includes(braces[i]))
     {
        leftBraces.push(braces[i]);
     }
     else if(closingBrace.includes(braces[i]))
     {
        rightBraces.push(braces[i]);
     }
  }

  if(braces.length%2!==0)
  {
     return false;
  }
  else if(leftBraces.length!==rightBraces.length)
  {
    return false;
  }
  else {
    for(let i=0;i<leftBraces.length;i++)
    { // [[[ ]]]
        if(openingBrace.indexOf(leftBraces[i])===closingBrace.indexOf(rightBraces[i]))
        {
            count+=1;
        }
        else if(openingBrace.indexOf(leftBraces[i])===closingBrace.indexOf(rightBraces.reverse()[i]))
        {
            count+=1;
        }
    }
    // console.log(count);
    // console.log(leftBraces);
    // console.log(rightBraces);
    if(count===braces.length/2)
    {
        return true;
    }
    else{
         return false
    }
  }
}
console.log(validBraces("(){}[]"));
console.log(validBraces( "()" )) 
console.log(validBraces("([])")) 
console.log(validBraces( "[(])" )) 
console.log(validBraces( "[(})" )) 
console.log(validBraces( "[([[]])]" )) 
