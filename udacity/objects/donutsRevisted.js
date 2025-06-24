const donuts=[
    {
        firstName:"Magnifique",
        type:"student",
        age:20,
        home:"Kigali",
    },
    {
        firstName:"Antoinette",
        type:"student",
        age:20,
        home:"Kigali",
    },
]

donuts.forEach((item)=>{
    console.log("Your name is "+item.firstName+" you are a "+item.type+" who has "+item.age+" and live in "+item.home); 
})