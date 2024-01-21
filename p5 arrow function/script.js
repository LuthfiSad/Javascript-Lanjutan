// Function Expresion
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('koplak'));

// Merubahnya Menjadi Arrow Function
// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('koplak'));


// Jika Memiliki 2 parameter
// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, Halo ${nama}`;
// }
// console.log(tampilNama('kijang', 'pagi'));


// jika hanya 1 parameter saja bisa lebih singkat lagi, di sebutnya menggunakan implisit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('koplak'));

// jika tidak memiliki parameter
const tampilNama = () => `Hello Wolrd!`;
console.log(tampilNama());



// // contoh lagi

// // menggunakan function biasa
let mahasiswa = ['Kocag gemink', 'Anjay mabar propesional', 'Ashoyy digeboy', 'Asshuu choy'];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// })
// console.log(jumlahHuruf)


// Jika di ubah menjadi arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);


// dan jika yang di kembalikan berupa object
let jumlahHuruf = mahasiswa.map(nama => ({
    // versi terbaru javascript jika propery dan value nya sama maka hanya di tulis 1 saja
    nama,
    jumlahHuruf: nama.length
}));
console.log(jumlahHuruf);
// jika ingin rapih bentuk tampilan object di console
console.table(jumlahHuruf);