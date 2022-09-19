function solution(a, arr) {
  // Write your solution here
  let count = 0;
  for (let i = 0; i < a; i++) {
    for (let j = i + 1; j < a; j++) {
      if (arr[i] + arr[j] == i + j) {
        count++;
      }
    }
  }
  return count;
}
console.log(solution(5, [1, 0, 3, 2]));
