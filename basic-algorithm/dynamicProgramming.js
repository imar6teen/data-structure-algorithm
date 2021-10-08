//DYNAMIC PROGRAMMING (FIBONACCI PROBLEM)
// memoization or top down method of dynamic programming
// console.time("start");
// let tmparr = [];
// function dp(n) {
//   let result = 0;
//   if (tmparr[n] !== undefined) return tmparr[n];
//   if (n <= 2 && n > 0) {
//     result = 1;
//   } else if (n > 2) {
//     result = dp(n - 1) + dp(n - 2);
//   }
//   tmparr[n] = result;
//   return result;
// }
// console.log(dp(200));

// console.timeEnd("start");

// tabulation or bottom up
console.time("start");
function dp(n) {
  let tmparr = [];
  tmparr[0] = 0;
  tmparr[1] = 1;
  if (n <= 1) return n;
  for (let i = 2; i <= n; i++) {
    tmparr[i] = tmparr[i - 1] + tmparr[i - 2];
  }
  return tmparr[n];
}

console.log(dp(200));
console.timeEnd("start");
