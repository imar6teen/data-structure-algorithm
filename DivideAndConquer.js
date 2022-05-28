let array = [200, 2, 50, 80, 5, 3, 20];
let akhir = array.length - 1;
let mulai = 0;
// const dacMax = (array, mulai, akhir) => {
//   if (akhir - mulai === 1) {
//     if (array[mulai] >= array[akhir]) return array[mulai];
//     else return array[akhir];
//   } else if (akhir - mulai === 0) return array[mulai];

//   let mid = Math.floor((akhir + mulai) / 2);
//   let kiri = dacMax(array, mulai, mid);
//   let kanan = dacMax(array, mid + 1, akhir);
//   if (kiri > kanan) return kiri;
//   else if (kiri <= kanan) return kanan;
// };

// console.log(dacMax(array, mulai, akhir));

const dacMin = (array, mulai, akhir) => {
  if (akhir - mulai === 1) {
    if (array[mulai] >= array[akhir]) return array[akhir];
    else return array[mulai];
  } else if (akhir - mulai === 0) return array[mulai];

  let mid = Math.floor((mulai + akhir) / 2);
  let kiri = dacMin(array, mulai, mid);
  let kanan = dacMin(array, mid + 1, akhir);
  if (kiri > kanan) return kanan;
  else return kiri;
};

console.log(dacMin(array, mulai, akhir));
