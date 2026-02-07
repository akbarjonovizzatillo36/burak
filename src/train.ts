// TASK O:

// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.




function calculateSumOfNumbers(arr: any[]): number {
  return arr.reduce((sum, item) => {
    return typeof item === "number" ? sum + item : sum;
  }, 0);
}

const result = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
console.log(result); 
