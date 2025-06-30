const pattern=/Geeks/;
const flags="i";
const text="geeks for geeks is the recommended platform to use";
let regex=new RegExp(pattern,flags);
console.log(regex.test(text));