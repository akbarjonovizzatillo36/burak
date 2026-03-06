function sumEvens(arr: number[]): number {
  let sum = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }

  return sum;
}

console.log(sumEvens([1, 2, 3]));     
console.log(sumEvens([1, 2, 3, 2]));   