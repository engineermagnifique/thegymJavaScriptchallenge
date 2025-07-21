function order(words) {
  if (words.length === 0) return '';

  const result = [];

  words.split(' ').forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      if (!isNaN(word[i])) {
        const position = parseInt(word[i]);
        result[position - 1] = word;
        break;
      }
    }
  });

  return result.join(' ');
}

console.log(order('is2 Thi1s T4est 3a')); 
