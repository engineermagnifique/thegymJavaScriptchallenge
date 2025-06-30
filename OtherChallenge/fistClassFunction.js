const Arithematics={
    add:(a,b)=>{
        return a+b;
    },
    substruct:(a,b)=>{
        return a-b;
    },
    division:(a,b)=>{
        if(b!==0){
            return a/b;
        } else {
            return Infinity;
        }
    },
    mul:(a,b)=>{
        return a*b;
    },
};

console.log("The sum is ",Arithematics.add(3,5));