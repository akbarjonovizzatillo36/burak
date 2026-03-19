// TASK ZF


// Shunday function yozing, uni string parametri bo'lsin.
// Ushbu function, har bir so'zni bosh harflarini katta harf qilib qaytarsin.
// Lekin uzunligi 1 yoki 2 harfga teng bo'lgan so'zlarni esa o'z holicha
// qoldirsin.

// MASALAN: capitalizeWords('name should be a string'); return 'Name Should be a String';

// Yuqoridagi misolda, bizning function, uzunligi 2 harfdan katta bo'lgan so'zlarnigina,
// birinchi harfini katta harf bilan qaytarmoqda.

function capitalizeWords(str: string): string {
  return str
    .split(" ")
    .map((word) =>
      word.length > 2 ? word[0].toUpperCase() + word.slice(1) : word
    )
    .join(" ");
}

console.log(capitalizeWords("name should be a string"));
