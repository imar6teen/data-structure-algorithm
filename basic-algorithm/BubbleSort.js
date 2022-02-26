function bubbleSort(arr) {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  }

  return arr;
}

let arr = [];

for (let i = 0; i < 5000; i++) {
  arr[i] = Math.floor(Math.random() * 30);
}

console.time("bubbleSort");
bubbleSort(arr);
console.timeEnd("bubbleSort");
console.log(arr);
