let employee={
    eid:"E102",
    name:"Jack",
    address:"Kigali",
    salary:50000,
}
console.log("Employee ",employee);
let newEmployee=employee; //shallow copy
console.log("New employee ",newEmployee);

console.log("After modification");
newEmployee.name="Magnifique";
console.log("Old ",employee);
console.log("New ",newEmployee)
//for shallow copy the effects in one object affect other as it has the same memory address and we can address this issue by using deep copy 