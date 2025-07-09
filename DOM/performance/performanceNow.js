const startingTime=performance.now();
for(let i=1;i<=200;i++)
{
    for(let j=1;j<=100;j++)
    {
        console.log("I and J are ",i,j);
    }
}
const endingTime=performance.now();
console.log("This code took "+(endingTime-startingTime)+'milliseconds.');