function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const result = randomBetween(30, 50);
console.log(result);