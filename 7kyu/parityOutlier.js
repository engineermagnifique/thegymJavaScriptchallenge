function findOutlier(integers){
  const parities = integers.slice(0, 3).map(n => Math.abs(n % 2));
  const majorityEven = parities.filter(p => p === 0).length > 1;
  return integers.find(n => (Math.abs(n % 2) === 0) !== majorityEven);
}
let numbers=[20,13,45,90];
findOutlier(numbers);