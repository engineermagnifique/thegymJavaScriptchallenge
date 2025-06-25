function getMiddle(s) {
    let midPoint=s.length/2;
    if(!midPoint.toString().includes("."))
    {
        return s.charAt(midPoint-0.5)+s.charAt(midPoint+0.5);
    }
    else {
        return s.charAt(midPoint);
    }
}
console.log(getMiddle("tehst"));