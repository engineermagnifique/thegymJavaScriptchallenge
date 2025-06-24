const studentsArray = [
    { name: "Kingsley", score: 70, position: "1st" },
    { name: "Jack", score: 80, position: "2nd" },
    { name: "Joe", score: 63, position: "3rd" },
    { name: "Beth", score: 75, position: "4rd" },
    { name: "Kareem", score: 59, position: "5th" },
    { name: "Sarah", score: 93, position: "6th" }
]

const studentPosition=studentsArray.reduce((acc,val)=>{
    return {...acc,[val.name]:val.position}
},{})
console.log(studentPosition);
