// partition is the function to split the array (Divide and Conquer) and sort it
function partition(arr, low, high) {
  let pivot = arr[high];

  // index of smaller element, substact 1 because pointer will increment by 1
  let pointer = low - 1;

  // traverse the array from low to high
  for (let i = low; i < high; i++) {
    // if current element is smaller than the pivot, then swap it with the pointer
    if (arr[i] <= pivot) {
      pointer++;

      // swap the element at pointer and i
      [arr[pointer], arr[i]] = [arr[i], arr[pointer]];
    }
  }

  // swap the pivot with the next pointer so the pointer will be the next index of the pivot
  [arr[pointer + 1], arr[high]] = [arr[high], arr[pointer + 1]];

  // return the index of the pivot
  return pointer + 1;
}

function quickSortHelper(arr, low, high) {
  if (low >= high) return;

  let pi = partition(arr, low, high);

  quickSortHelper(arr, low, pi - 1);

  quickSortHelper(arr, pi + 1, high);
}

/**
 *
 * @param {Array} arr
 */
function quickSort(arr) {
  quickSortHelper(arr, 0, arr.length - 1);
}

let arr1 = [];

for (let i = 0; i < 50000; i++) {
  arr1[i] = Math.floor(Math.random() * 30);
}

console.time("quickSort");
quickSort(arr1);
console.timeEnd("quickSort");

// console.log(arr);
