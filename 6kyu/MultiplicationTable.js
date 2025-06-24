function multiplicationTable(size) {
  const result=[];
  for(let i=0;i<size;i++)
    {
      result[i]=[];
      for(let j=0;j<size;j++)
        {
          result[i][j]=(i+1)*(j+1);
        }
    }
  return result;
}
console.log(multiplicationTable(3));
console.log(multiplicationTable(4));