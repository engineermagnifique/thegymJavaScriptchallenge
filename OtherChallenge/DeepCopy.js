let employee={
    eid:"E102",
    name:"Jack",
    address:"Kigali",
    salary:50000,
}
console.log("Employee ",employee);
let newEmployee=JSON.parse(JSON.stringify(employee));
//JSON.parse() it is method that transforms it into a JavaScript and JSON.stringfy() takes a JavaScript object as an argument and transform it to JSON string
console.log("New employee ",newEmployee);

console.log("After modification");
newEmployee.name="Magnifique";
console.log("Old ",employee);
console.log("New ",newEmployee)