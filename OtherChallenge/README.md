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
