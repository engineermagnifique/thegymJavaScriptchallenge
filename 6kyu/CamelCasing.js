function toCamelCase(str) {
  return str
    .replace(/[-_]/g, " ")                     
    .split(" ")                               
    .map((word, index) =>
      index === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");                                 
}

console.log(toCamelCase("the_stealth_warrior")); 
console.log(toCamelCase("The-Stealth-Warrior")); 
