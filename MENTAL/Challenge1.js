
function multiply(a,b)
{
    if(a && b)
    {
        return a*b;
    } else {
        return function(){
            let num=a;
            if(Array.isArray(num))
            {
                return num.map((n)=>n*2);
            }
            else {
                return num*2;
            }
        }
    }
}

console.log(multiply(2));