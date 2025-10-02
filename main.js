export function capitalize(string){
  return string[0].toUpperCase().concat(string.slice(1));
}

export function reverseString(string){
  return string.split('').reverse().join('');
}

export const calculator = {
  add(a,b) {
    return a + b;
  },
  subtract(a,b){
    return a - b;
  },
  divide(a,b){
    return a / b;
  },
  multiply(a,b){
    return a * b;
  }
  
}

export function caesarCipher(string, key){
  const lowerArr = Array.from({ length: 26}, (_, i) => String.fromCharCode(97 + i));
  const upperArr = Array.from({ length: 26}, (_, i) => String.fromCharCode(65 + i));  
  const arrayedString = string.split('');
  let encoded = '';

  for (let i = 0; i < arrayedString.length; i++){
    let curr = arrayedString[i];


    if (/[a-z]/.test(curr)){
      let newIndex = (lowerArr.indexOf(curr) + key) % 26;
      encoded += lowerArr[newIndex];
    } else if (/[A-Z]/.test(curr)) {
      let newIndex = (upperArr.indexOf(curr) + key) % 26;
      encoded += upperArr[newIndex];
    } else {
      encoded += curr;
    }
  }
  
  return encoded;
}

export function analyzeArray(arr){
  let avg = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  let min = arr.reduce((prev, curr) => prev < curr ? prev : curr);
  let max = arr.reduce((prev, curr) => prev > curr ? prev : curr);

  return {
    average: avg,
    min: min,
    max: max,
    length: arr.length
  }
}