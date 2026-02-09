function objectToArray(obj: Record<string, any>): [string, any][] {
    return Object.entries(obj);
}

const result = objectToArray({ a: 10, b: 20 });
console.log(result);
