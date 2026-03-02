function findIntersection(arr1: number[], arr2: number[]): number[] {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(item => set2.has(item)))];
}


console.log(findIntersection([1, 2, 3], [3, 2, 0])); 

