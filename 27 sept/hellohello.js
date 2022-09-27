let str = "Ashish Yadav Abhishek Rajput Sunil Pundir";

function solution(str) {
  str = str.split(" ");
  let arr1 = [];
  let arr2 = [];
  let len = str.length;

  for (let i = len - 1; i >= 0; i--) {
    if (len % 2 == 0) {
      if (i % 2 != 0) {
        let word = str[i];
        let splitWord = word.split("").reverse().join("");
        arr1.push(splitWord);
      } else {
        arr2.push(str[i]);
      }
    } else {
      if (i % 2 == 0) {
        let word = str[i];
        let splitWord = word.split("").reverse().join("");
        arr1.push(splitWord);
      } else {
        arr2.push(str[i]);
      }
    }
  }
  return arr1.concat(arr2.reverse()).join(' ');
}

console.log(solution(str));
