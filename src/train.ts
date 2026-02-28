// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.

// Eslatma => Nested object'lar ham sanalsin

// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda

function countOccurrences(obj: any, keyName: string): number {
  let count = 0;

  for (const key in obj) {
    if (key === keyName) {
      count++;
    }

    if (typeof obj[key] === "object" && obj[key] !== null) {
      count += countOccurrences(obj[key], keyName);
    }
  }

  return count;
}

const data = {
  model: "Bugatti",
  steer: {
    model: "HANKOOK",
    size: 30
  }
};

console.log(countOccurrences(data, "model")); 
