function mul(x){
    return function(y){
        return x*y;
    }
}
var res=mul(4);
console.log(res(5)); //second time it looks like it is function expression
