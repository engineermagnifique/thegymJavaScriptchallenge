function Solution(number)
{
    let sum=0;
    for(let i=0;i<number;i++)
    {
        if(i%3===0 || i%5===0)
        {
            sum=sum+i;
            console.log(i);
        }
    }
    return sum;
}
console.log(Solution(10));