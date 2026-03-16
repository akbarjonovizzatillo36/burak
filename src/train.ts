function removeDuplicate(str: string): string {
  return [...new Set(str)].join('');
}


console.log(removeDuplicate('stringg')); 