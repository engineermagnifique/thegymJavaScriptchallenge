function openOrSenior(data){
  return data.map(member=>{
    const [age,lever]=member;
    return age>55 && lever>7?"Senior":"Open";
  })
}
let input=[[45, 12],[55,21],[19, -2],[104, 20]]
console.log(openOrSenior(input)); 