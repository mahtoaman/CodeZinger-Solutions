function solution(a, arr) {
  // Write your solution here
  let count = 0;
  for (let i = 0; i < a; i++) {
    let k = arr[i];
    let sum = 0;
    for (let j = 0; j < a; j++) {
      if (arr[j] == k) {
        continue;
      } else {
        sum += arr[j];
      }
    }
    if (sum % k == 0) {
      count++;
    }
  }
  return count;
}


//=================
let a = 5
let arr = [3,10,4,6,7]
console.log(solution(a,arr))
