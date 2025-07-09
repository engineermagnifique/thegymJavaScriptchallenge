function firstNonRepeatingLetter(s) {
    let newStr = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if (newStr.indexOf(newStr[i]) === newStr.lastIndexOf(newStr[i])) {
            return s[i]; 
        }
    }
    return "";
}
console.log(firstNonRepeatingLetter("moonmen"));
