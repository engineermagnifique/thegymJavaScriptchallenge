## Invoked Function Expressions

are JavaScript functions that are executed immediately after they are defined.

```
node involedFunction.js
```

## Shollow Copy Works in JavaScript

When you assign one object to another using the assignment operator (=), a shallow copy is created:

```
node shallowCopy.js
```

### Explanation

From the above example, it is seen that when the name of newEmployee is modified, it is also reflected for the old employee object. This can cause data inconsistency. This is known as a shallow copy. The newly created object has the same memory address as the old one.

Hence, any change made to either of them changes the attributes for both. To overcome this problem, a deep copy is used. If one of them is removed from memory, the other one ceases to exist. In a way the two objects are interdependent.

##Deep copy
A deep copy, on the other hand, creates a completely independent copy of the object, including all nested objects or arrays. This ensures that changes made to one object do not affect the other. Each object is stored in a separate memory location, making them entirely independent.

```
node DeepCopy.js
```

### Explanation

Here the new object is created using the JSON.parse() and JSON.stringify() methods of JavaScript. JSON.stringify() takes a JavaScript object as an argument and then transforms it into a JSON string. This JSON string is passed to the JSON.parse() method which then transforms it into a JavaScript object.

This method is useful when the object is small and has serializable properties. But if the object is very large and contains certain non-serializable properties then there is a risk of data loss. Especially if an object contains methods then JSON.stringify() will fail as methods are non-serializable. There are better ways to a deep clone of which one is Lodash which allows cloning methods as well.

## Clone deep by lodash library

Lodash is a JavaScript library that provides multiple utility functions and one of the most commonly used functions of the Lodash library is the cloneDeep() method. This method helps in the deep cloning of an object and also clones the non-serializable properties which were a limitation in the JSON.stringify() approach.
first over all, install

```
npm install lodash //for window
``

#### run this code to see the changes
```

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

```
go in your terminal and write
```

node rodashCopy.js

```

### Explanation
Explanation: Both objects have different properties after the modification. Also, the methods of each object are differently defined and produce different outputs.

Understanding the difference between shallow copy and deep copy in JavaScript is key to managing data safely and effectively. While a shallow copy is simple and quick, it can lead to unintended side effects when dealing with nested objects.

Deep copy, on the other hand, ensures that objects are fully independent, making your code more predictable. Depending on the complexity of your data structure, you can choose between using native JavaScript methods like JSON.parse()/JSON.stringify() or libraries like Lodash for a more robust solution.
```
