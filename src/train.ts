function hasProperty(obj: object, key: string): boolean {
  return Object.keys(obj).includes(key);
}
console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));  // false
