const fruits=["apple","banana","cassava","meat"];
function searchItem(acc,value)
{
    return acc.some((val)=>val===value);
}
console.log(searchItem(fruits,"banana"));
console.log(searchItem(fruits,"tree"));