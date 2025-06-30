function formatEntries(arr)
{
    let result=[];
    for(const [index,value] of arr.entries())
    {
        result.push(`index ${index} => ${value}`);
    }
    return result.join(",");
}
console.log(formatEntries(["a", "b", "c"]));