// TASK ZB

// Shunday function yozing, uni 2 ta number parametri bolsin
// va berilgan sonlar orasidan random raqam return qilsin
// MASALAN: randomBetween(30, 50) return 45

// Shunday function yozing, uni 2'ta number parametri bo'lsin.
// Va berilgan sonlar orasidan random raqam returnb qilsin.

// MASALAN: randomBetween(30, 50) return 45;

// Yuqoridagi misolda, argument sifatida ikkita raqam, '30' va '45'
// berilmoqda, function'ning vazifasi, shu ikkala son orasidan
// random raqamni topib qaytarmoqda.

function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const result = randomBetween(30, 50);
console.log(result);