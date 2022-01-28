const mataUang = [1000, 500, 400, 200, 100];
const kembalian = 1800;

function greedyAlgo(mataUang, kembalian) {
  let uangKembalian = [];
  for (let i = 0; i < mataUang.length; i++) {
    if (kembalian === 0) break;
    while (mataUang[i] <= kembalian) {
      uangKembalian.push(mataUang[i]);
      kembalian = kembalian - mataUang[i];
      console.log(uangKembalian);
    }
  }
  return uangKembalian;
}

console.log(
  `Uang kembalian : ${greedyAlgo(mataUang, kembalian)} dari ${kembalian}`
);
