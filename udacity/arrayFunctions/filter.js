const names=['Alice', 'Bob', 'Charlie', 'David', 'Eve','Anne'];
const filteredNames=names.filter((word)=>word.charAt(0)==='A');
console.log(filteredNames); 
//we can pass a function to filter
const numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9];
function isEven(num){
    if(num%2===0){
        return true;
    }
    return false;
}
const evenNumbers=numbers.filter(isEven);
console.log(evenNumbers);
//building a search engine with filter
const fruits=['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig']
function searchFruits(array, query) {
    return fruits.filter((fruit)=>fruit.toLowerCase().includes(query.toLowerCase()));
}
console.log(searchFruits(fruits, 'at'));