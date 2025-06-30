function smartSeatFiller() {

  const seats = Array.from({ length: 10 }, (_, i) => i + 1);

  const vip = [101, 102];
  const merged = vip.concat(seats); // [101, 102, 1, 2, ..., 10]

  merged.copyWithin(5,vip); 

  const secondToLast = merged.at(-2);

  return {
    seats: merged,
    secondToLastSeat: secondToLast
  };
}

console.log(smartSeatFiller().seats);
