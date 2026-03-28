// TASK ZH

// Shunday function yozing, u berilgan array parametri ichidagi
// raqamlar orasidan, tartib bo'yicha eng kichik raqamdan, eng katta raqamgacha
// tushirib qoldirilgan sonlarni o'zinigina topib bir array sifatida qaytarsin.
  
// MASALAN: findDisappearedNumbers([1, 3, 4, 7]); return [2, 5, 6];

// Yuqoridagi misolda, eng katta raqam bu 7 va eng kichik raqam bu 1.
// Function'ning vazifasi berilgan sonlar ichidan tushirib qoldirilgan
// sonlarnigina topib qaytarmoqda.

function findDisappearedNumbers(arr: number[]): number[] {
  const res: number[] = [];

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    if (!arr.includes(i)) res.push(i);
  }

  return res;
}

console.log(findDisappearedNumbers([1, 3, 4, 7]));