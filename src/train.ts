//M-TASK
function kvadratlariniOl(raqamlar: number[]) {
  const natija = [];

  for (let i = 0; i < raqamlar.length; i++) { 
    const joriyNatija = raqamlar[i]
    const kvadrat = joriyNatija * joriyNatija;
    const obj = {
      raqam: joriyNatija,
      kvadrat: kvadrat
    };
    
    natija.push(obj);
  }
  
  return natija;
}
const chiqarish = kvadratlariniOl([      
                                        7,9,2     // shu yerga raqamlarni kiriting
]);
console.log("Oxirgi natija:", chiqarish);

//L-TASK
/*
function reverseSentence(sentence: string): string {
  1. Gapni so'zlarga bo'lamiz
  const words = sentence.split(" ");

  2. Har bir so'zni teskarisiga o'giramiz
  const reversedWords = words.map(word => {
    return word.split("").reverse().join("");
  });

  3. So'zlarni yana birlashtiramiz
  return reversedWords.join(" ");
}

Test
console.log(reverseSentence("we like coding!"));  // ew ekil !gnidoc
 */

//K-TASK
/*function unliSana(yozuv: string): number {
  let soni = 0;

  for (let i = 0; i < yozuv.length; i++) {
    let ch = yozuv[i];
    if (
      ch === "a" ||
      ch === "e" ||
      ch === "i" ||
      ch === "o" ||
      ch === "u" ||
      ch === "A" ||
      ch === "E" ||
      ch === "I" ||
      ch === "O" ||
      ch === "U"
    ) {
      soni++;
    }
  }

  return soni;
}
const natija = unliSana(

  "Bu yerda unli harflar sonini sanaymiz." // shu yerga matn kiriting.
  
);
console.log(natija);
*/

//J-Task
/*function uzunSozniTop(text: string): string {
  const sozlar: string[] = text.split(" ");
  let enguzunsoz: string = "";

  for (let i = 0; i < sozlar.length; i++) {
    if (sozlar[i].length > enguzunsoz.length) {
      enguzunsoz = sozlar[i];
    }
  }

  return enguzunsoz;
}


const result = uzunSozniTop("Bu yerga matn kiriting, eng uzun so'zni topish uchun.");
console.log(result);  */

//I-TASK
/*const shuyergaKiriting: string =
  "634895734403246589723984794"; // shu yerga raqamlarni kiriting.

const arr: string[] = [...shuyergaKiriting];

function majorityElement(arr: string[]): { element: string | null; count: number | undefined } {
  if (!arr.length) return { element: null, count: undefined };
  
  const map = new Map<string, number>();
  let max = 0;
  let res = null;

  for (const num of arr) {
    const count = (map.get(num) || 0) + 1;
    map.set(num, count);
    
    if (count > max) {
      max = count;
      res = num;
    }
  }
  return { element: res, count: map.get(res!) };
}

const result = majorityElement(arr);
log(`Array ichida ${result.element} raqami eng ko'p takrorlangan.`);
log(`${result.element} umumiy ${result.count} marta takrorlangan.`);
*/

//H2-TASK
/*
let shuYergaKiriting: string = "Wsha74jhk4hjkkjh5jkh3%4^&(_{}";

let onlyLetters: string = shuYergaKiriting.replace(/[^a-zA-Z]/g, "");
let onlyDigits: string = shuYergaKiriting.replace(/\D/g, "");
let onlySymbols: string = shuYergaKiriting.replace(/[a-zA-Z0-9]/g, "");

console.log("faqat harflar:    ", onlyLetters);
console.log("faqat raqamlar:   ", onlyDigits);
console.log("faqat simvollar:  ", onlySymbols);

const shuYergaKiriting: string = "ddsf67";
*/
//H-TASK
/*
shunday function tuzing, u integerlardan iborat arrayni 
argument sifatida qabul qilib, faqat positive qiymatlarni 
olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"


function musbatQiymat(arr: number[]) {
  let yechim = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      yechim += String(arr[i]);
    }
  }
  const arr1 = [...yechim];
  const oxirgiYechim = arr1.join(" ");
  return oxirgiYechim;

}
const a = musbatQiymat(
  
  [1, -4, 6, 8, -8, 2] // shu yerga qiymatlarni kiriting.

);
console.log(a); // "12" */

//G-TASK
/*
function maximumQiymatIndexiniOling(arr: number[]): number {
  if (arr.length === 0) return -1;

  let max = arr[0];
  let idx = 0;

  let i = 0;
  for (const value of arr) {
    if (value > max) {
      max = value;
      idx = i;
    }
    i++;
  }

  return idx;
}
const check = maximumQiymatIndexiniOling(
    [
        30, 50, 69, 12, 46, 78, 43, 99 //sonlarni shu qismga kiriting
    ]);
console.log(check); // 1*/