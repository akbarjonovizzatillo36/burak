// //TASK ZI

// Shundan function yozing, bu function 3 soniydan so'ng
// "Hello World!" so'zini qaytarsin.

// MASALAN: delayHelloWorld("Hello World"); return "Hello World";

function delayHelloWorld(text: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, 3000);
  });
}

delayHelloWorld("Hello World!").then((res) => {
  console.log(res);
});