function Emotions(myString,myFunc)
{
    console.log("I'm "+myString+ ","+myFunc(3));
}

Emotions("Happy", function(num){
    let newHa="";
    for(let i=0;i<num;i++)
    {
        newHa+="ha";
    }
    return newHa+"!";
});//It means that the function(num) is a callback 