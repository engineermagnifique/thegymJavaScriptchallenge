var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
for (var index = 0; index<prices.length; index++){
    if(index===0){
        prices[index]=11;
    }
    else if(index===2){
        prices[index]=33;
    }
    else if(index===6){
        prices[index]=77;
    }
}
console.log(prices);