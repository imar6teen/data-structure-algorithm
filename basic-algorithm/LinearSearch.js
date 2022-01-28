let array = [5, 3, 1, 9, 10];
let target = 11;

function search(array, n) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) return i;
  }
  return "Data tidak ditemukan";
}

console.log(search(array, target));
//console log ganti echo
// let ganti $
