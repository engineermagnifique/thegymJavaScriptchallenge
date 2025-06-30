const person={
    name:"Magnifique",
    courses:"CSE",
    points:[80,78,69,60,30],
    totalPoints:function(){
       return this.points.reduce((acc,val)=>acc+val,0);
    },
    myDetails:function(location){
        return "Your marks is "+this.totalPoints()+" Your name is "+this.name+" your learn "+this.courses+"You live in "+location;
    },
}

function memoise(func){
    var cache={};
    return function(arg){
        if(cache[arg])
        {
            return cache[arg];
        } else {
            let res=func(arg);
            cache[arg]=res;
            return res;
        }
    }
}
function viewPerson(venue){
    console.log("Displaying your name....");
    return person.myDetails(venue);
}

var result=memoise(viewPerson)("Nyarugenge");
console.log("First: ",result);
console.log("Second: ",result);
console.log("first: ",memoise(viewPerson)("Huye"));
console.log("last: ",memoise(viewPerson)("Huye"));