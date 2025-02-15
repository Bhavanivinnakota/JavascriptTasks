function reverseString(str){
  return str.split("").reverse().join("");
}

const result = reverseString("hello");
console.log(result);