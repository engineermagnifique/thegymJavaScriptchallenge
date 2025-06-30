function generateMatrix(rows,cols)
{
  let counter=1;
  return Array.from({length:rows},()=>
   Array.from({length:cols},()=>counter++)  
  )
}
console.log(generateMatrix(3,3));