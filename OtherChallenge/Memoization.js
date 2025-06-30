function memoise(func){
    var cache={};
    return function(arg){
        if(cache[arg])
        {
            return cache[arg];
        } else {
            var res=func(arg);
            cache[arg]=res;
            return res;
        }
    };
}
function faster(num){
    console.log("Computing the result");
    return num+6;
}

var response=memoise(faster)(10);
console.log("Before ",response);//computing result
console.log("After ",response);//non computing as it is cached