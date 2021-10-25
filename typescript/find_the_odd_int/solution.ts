export const findOdd = (xs: number[]): number => {
  for (let i: number = 0; i < xs.length; i++) {
    if (xs.filter(x => x == xs[i]).length % 2)
      return xs[i];
  }
  return 0;
};
