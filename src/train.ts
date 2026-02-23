// TASK V

// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
  
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// Yuqoridagi misolda, 'hello' so'zi tarkibida
// qatnashgan harflar necha marotaba takrorlangini bilan
// object sifatida qaytarilmoqda.

function countChars(str: string): Record<string, number> {
  const result: Record<string, number> = {};

  for (const char of str) {
    result[char] = (result[char] || 0) + 1;
  }

  return result;
}

console.log(countChars("hello"));