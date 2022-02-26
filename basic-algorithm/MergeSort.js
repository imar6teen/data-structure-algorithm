//created bot
function merge(arr, start, mid, end) {
  let left = start;
  let right = mid + 1;
  let temp = [];
  while (left <= mid && right <= end) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= end) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = 0; i < temp.length; i++) {
    arr[start + i] = temp[i];
  }
}
function mergeSortHelper(arr, start, end) {
  if (start >= end) {
    return;
  }
  let mid = Math.floor((start + end) / 2);
  mergeSortHelper(arr, start, mid);
  mergeSortHelper(arr, mid + 1, end);
  merge(arr, start, mid, end);
}

function mergeSort(arr) {
  let start = 0;
  let end = arr.length - 1;
  mergeSortHelper(arr, start, end);
}

let arr = [];

for (let i = 0; i < 5000; i++) {
  arr[i] = Math.floor(Math.random() * 30);
}

console.time("mergeSort");
mergeSort(arr);
console.timeEnd("mergeSort");
console.log(arr);
