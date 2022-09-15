let arr = [1, 2, 3, 4, 5];
let k = 2;

for (let i = 0; i < k; i++) {
  let l = arr.pop();
  arr.unshift(l);
}
console.log(arr);
