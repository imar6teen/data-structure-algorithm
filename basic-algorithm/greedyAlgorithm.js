const mataUang = [
  100000, 75000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 100,
];
const hargaBarang = 9300;
const uangOrang = 50000;
const kembalian = uangOrang - hargaBarang;

function greedyAlgo(mataUang, kembalian) {
  console.time("tes");
  let uangKembalian = [];
  for (let i = 0; i < mataUang.length; i++) {
    while (mataUang[i] <= kembalian) {
      uangKembalian.push(mataUang[i]);
      kembalian = kembalian - mataUang[i];
      console.log(uangKembalian);
    }
  }
  console.timeEnd("tes");
  return uangKembalian;
}

console.log(
  `Uang kembalian : ${greedyAlgo(mataUang, kembalian)} dari ${kembalian}`
);
