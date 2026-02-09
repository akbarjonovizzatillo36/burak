// TASK P:

// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]



function objectToArray(obj: Record<string, any>): [string, any][] {
    return Object.entries(obj);
}

const result = objectToArray({ a: 10, b: 20 });
console.log(result);
