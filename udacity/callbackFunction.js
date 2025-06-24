var catSays=function(max)
{
    var catMessage="";
    for(let i=1;i<=max;i++)
    {
        catMessage+="Meow";
    }
    return catMessage;
}
function helloCat(callbackFunc){
    return "Hello"+callbackFunc(3);
}
console.log(helloCat(catSays));