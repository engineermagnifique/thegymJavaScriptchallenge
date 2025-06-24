const students = [
    { name: "Kingsley", score: 70 },
    { name: "Jack", score: 80 },
    { name: "Joe", score: 63 },
    { name: "Beth", score: 75 },
    { name: "Kareem", score: 59 },
    { name: "Sarah", score: 93 }
]

const max=students.reduce((acc,value)=>{
    if(acc===null||value.score>acc)
        return value.score
    return acc;
},null)
console.log(max);