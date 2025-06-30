function add(x){
    return x+3;
}
function mul(x){
    return x*3;
}
function composite(z,k)
{
    return function(x){
        return z(k(x));
    }
}
var res=composite(add,mul)(4);
console.log("The result is ",res);