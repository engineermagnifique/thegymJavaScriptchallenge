const fruits=['banana','apple','orange','banana','apple','banana'];
const Occurence=fruits.reduce((acc,currentValue)=> {
  return {...acc,[currentValue]:(acc[currentValue]||0)+1}
})
console.log(Occurence);