function rgb(r, g, b) {
    return formatData(r)+formatData(g)+formatData(b);
}
function formatData(value)
{
    if(value<=0)
    {
        return "00";
    }
    else if(value>=255)
    {
        return "FF";
    }
    else {
        let result=value.toString(16).toUpperCase();
        if(result.length<=1)
        {
           return result=0+result;
        } else {
            return result;
        }
    }
}
console.log(rgb(131,6,90));