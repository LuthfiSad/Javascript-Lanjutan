// // 1. Destructuring function Return Value
// function kalkulasi(a, b){
//   return [a+b, a-b, a*b, a/b];
// }
// const jumlah = penjumlahanPerkalian(5,5)[0];
// const kali = penjumlahanPerkalian(5,5)[1];

// //simplenya :
// const [jumlah, kali] = penjumlahanPerkalian(5,5);
// console.log(jumlah);
// console.log(kali);
// const [tambah, kurang, kali, bagi='Tidak ada/default']=kalkulasi(5,5);
// console.log(bagi);

// // jika tidak beurut harus menggunakan object
// function kalkulasi(a, b){
//   return {
//     tambah: a+b,
//     kurang: a-b,
//     bagi: a/b,
//     kali: a*b
//   }
// }
// const {kurang, kali, tambah, bagi}=kalkulasi(5,5);
// console.log(kali);



// 2. Destructuring Function Argument
const mhs1 ={
  nama: 'awok',
  umur: 26,
  email: 'awok@gmail.com',
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75
  }
}
// function cetakMhs(mhs){
//   return `Halo, Nama Saya ${mhs.nama}, Umur Saya ${mhs.umur} Tahun`;
// }
// console.log(cetakMhs(mhs1));

// Jika menggunakan Destructuring
function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}){
  return `Halo, Nama Saya ${nama}, Umur Saya ${umur} Tahun, Dan Nilai Uas Saya Adalah ${uas}`;
}
console.log(cetakMhs(mhs1));