function generateZigzagMatrix(rows, cols) {
  let counter = 1;
  return Array.from({ length: rows }, (_, rowIndex) => {
    const row = Array.from({ length: cols }, () => counter++);
    return rowIndex % 2 === 1 ? row.reverse() : row;
  });
}
