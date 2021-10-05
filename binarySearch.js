let arr = [1, 3, 5, 7, 9, 12, 13, 17];
let length = arr.length - 1;
let x = 9;

console.log(binarySearch(0, length, 0, x)); //binarySearch(awal, akhir/length, mid, ygdicari)

//recursive
function binarySearch(awal, length, mid, x) {
  mid = Math.floor((length + awal) / 2);
  if (arr[mid] == x) {
    return mid;
  } else if (arr[mid] <= x) {
    awal = mid + 1;
  } else if (arr[mid] >= x) {
    length = mid - 1;
  }
  if (length < awal) {
    return "Data tidak ditemukan";
  }
  return binarySearch(awal, length, mid, x);
}

//iteration loop
// function binarySearch(awal, length, mid, x) {
//   while (true) {
//     mid = Math.floor((length + awal) / 2);
//     if (arr[mid] == x) {
//       return mid;
//     } else if (arr[mid] <= x) {
//       awal = mid + 1;
//     } else if (arr[mid] >= x) {
//       length = mid - 1;
//     }
//     if (length < awal) {
//       return "Data tidak ditemukan";
//     }
//   }
// }
