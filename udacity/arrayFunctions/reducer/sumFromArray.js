const topSix = [
    { name: "Nigeria", position: "1st", points: 43 },
    { name: "England", position: "2nd", points: 37 },
    { name: "USA", position: "3rd", points: 35 },
    { name: "South Africa", position: "4th", points: 30 },
    { name: "Brazil", position: "5th", points: 27 },
    { name: "Korea", position: "6th", points: 23 }
]

const sumOfPoints=topSix.reduce((acc,currentValue)=>
acc+currentValue.points,
0,
);
console.log(sumOfPoints);

