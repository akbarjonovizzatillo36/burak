// TASK ZG

// String sifatida berilgan string parametrni
// snake case'ga o'tkazib beradigan function yozing.

// MASALAN: convertToSnakeCase('name should be a string')
// return 'name_should_be_a_string'

function convertToSnakeCase(str: string): string {
  return str.split(" ").join("_");
}

console.log(convertToSnakeCase("name should be a string"));

