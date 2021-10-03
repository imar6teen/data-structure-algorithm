const array = [
  200, 2, 50, 80, 100, 2000, 120, 400, 5, 3, 20, 16, 88, 25, 90, 1092,
];
let akhir = array.length - 1;
let mulai = 0;
const dacMax = (array, mulai, akhir) => {
  let kiri = 0;
  let kanan = 0;
  if (akhir - mulai === 1) {
    if (array[mulai] >= array[akhir]) return array[mulai];
    else return array[akhir];
  } else if (akhir - mulai === 0) return array[mulai];

  let mid = Math.floor((akhir + mulai) / 2);
  kiri = dacMax(array, mulai, mid);
  kanan = dacMax(array, mid + 1, akhir);
  if (kiri > kanan) return kiri;
  else if (kiri <= kanan) return kanan;
};

console.log(dacMax(array, mulai, akhir));
