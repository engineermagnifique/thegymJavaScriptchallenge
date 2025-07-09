function capitalizeOdd(word)
{
    let newWord=''
    for(let i=0;i<word.length;i++)
    {
        if(i%2!==0||i==0)
        {
        newWord+=word.charAt(i).toUpperCase();
        }
        else {
           newWord+=word.charAt(i).toLowerCase(); 
        }
    }
    return newWord;

    // Array.from(word).forEach((element,index) => {
    //     if(index%2===0){
    //         element[index].toUpperCase();
    //     } else {
    //         element[index].toLowerCase();
    //     }
    // });
    // return word;
}
console.log(capitalizeOdd("Javascript"));