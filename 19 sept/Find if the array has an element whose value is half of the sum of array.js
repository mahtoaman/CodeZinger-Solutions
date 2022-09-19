function solution(arr) {
  // Write your solution here
  let sum = 0;
  for (let i = 0; i < a; i++) {
    sum += arr[i];
  }

  for (let j = 0; j < a; j++) {
    if (sum / 2 == arr[j]) {
      return " Yes ";
    }
  }
  return "No";
}

let a = 3;
let arr = [2, 3];

console.log(solution(a, arr));
