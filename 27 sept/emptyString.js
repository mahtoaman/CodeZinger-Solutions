let str = "hehellohellohellohellollo";
let word = "hello";

for (let i = 0; i < len; i++) {
  console.log;
  str = str.replace(word, "");
  len = len--;
}
if (str.length == 0) {
  return "Yes";
} else {
  return "No";
}
