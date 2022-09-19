function solution(a, arr) {
  // Write your solution here
  let max = arr[0];
  arr[0] = -1;
  for (let i = 1; i < a; i++) {
    if (max > arr[i]) {
      arr[i] = max;
    } else {
      let temp = arr[i];
      arr[i] = max;
      max = temp;
    }
  }
  return arr.join(" ");
}
