const lodash=require("lodash");

let employee={
    id:120,
    name:"Magnifique",
    address:"Kigali",
    salary:900000,
    details:function(){
        return "Employee Name:"
           +this.name + " Salary: "+this.salary;
    }
}

let deepCopy=lodash.cloneDeep(employee);//we use cloneDeep keyword to clone every thing
console.log("Original Employee Object");
console.log(employee);
console.log("Deep copied");
console.log(deepCopy);
deepCopy.address="Gasabo";
deepCopy.name="NIRAGIRE"
console.log(deepCopy.details());