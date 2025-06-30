let regex=/[0-9]+/g;
let str="The order IDs are 223, 456, and 789.";
console.log(str.match(regex));
//The + quantifier ensures that consecutive digits are matched as a single number.

//validating numeric INPUT
let regex1=/^[0-9]+$/;//it checks if entire string contains only numeric
let input="1234777";
if(regex1.test(input))
{
    console.log("Valid numeric input");
} else {
    console.log("Invalid numeric");
}
//we can replace a Digits

let regexReplace=/[0-9]/g;
let string="This is my id 1234 and 4566";
console.log(string.replace(regexReplace,"***"));