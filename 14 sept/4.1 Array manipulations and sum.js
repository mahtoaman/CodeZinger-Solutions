function faltu(arr, m) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let arr1 = [...arr];
  let sum;
  let k;

  for (let i = 0; i < arr.length; i++) {
    k = arr[i];
    sum = 0;

    for (let j = i; j < arr.length; j++) {
      arr1[j] = k;
    }

    for (let s = 0; s < arr1.length; s++) {
      sum = sum + arr1[s];
    }
    if (sum == m) {
      console.log(k);
      // return k
      return;
    } 
   
  }
  console.log('-1')
  // return -1
}

let arr = [45,6,34,21,38];
let m = 15;
console.log(faltu(arr, m));
