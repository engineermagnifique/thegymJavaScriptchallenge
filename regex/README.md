## JavaScript RegExp

A regular expression is a special sequence of characters that defines a search pattern, typically used for pattern matching within text. It's often used for tasks such as validating email addresses, phone numbers, or checking if a string contains certain patterns (like dates, specific words, etc.).

```
// The /i flag makes the pattern case-insensitive
const patt = /Geeks/i;
const s1 = "geeksforgeeks";
const s2 = "forgeeks";

console.log(patt.test(s1));
console.log(patt.test(s2));
```
